[CmdletBinding()]
param(
    [string[]]$Stack = @('React', 'Vue', 'Angular', 'Blazor'),
    [int]$ReactPort = 4173,
    [int]$VuePort = 4174,
    [int]$AngularPort = 4200,
    [int]$BlazorPort = 5175,
    [switch]$SkipInstall,
    [switch]$SkipTests,
    [switch]$NoStart
)

$ErrorActionPreference = 'Stop'
$root = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$failureMessages = [System.Collections.Generic.List[string]]::new()
$launches = [System.Collections.Generic.List[object]]::new()
$selected = [System.Collections.Generic.HashSet[string]]::new([System.StringComparer]::OrdinalIgnoreCase)
$validStacks = @('Core', 'React', 'Vue', 'Angular', 'Blazor')

foreach ($name in $Stack) {
    foreach ($value in ($name -split '[,\s]+')) {
        if (-not $value) {
            continue
        }
        if ($validStacks -notcontains $value) {
            throw "Unknown stack '$value'. Valid values: $($validStacks -join ', ')."
        }
        [void]$selected.Add($value)
    }
}

function Invoke-Step {
    param(
        [Parameter(Mandatory)]
        [string]$Name,
        [Parameter(Mandatory)]
        [string]$Command,
        [Parameter()]
        [string[]]$Arguments = @()
    )

    Write-Host "`n==> $Name" -ForegroundColor Cyan
    & $Command @Arguments
    if ($LASTEXITCODE -ne 0) {
        throw "$Name failed with exit code $LASTEXITCODE."
    }
}

function Test-Tool {
    param([Parameter(Mandatory)][string]$Name)

    $tool = Get-Command $Name -ErrorAction SilentlyContinue
    if (-not $tool) {
        throw "Required tool '$Name' was not found on PATH."
    }
    return $tool.Source
}

function Resolve-Npm {
    $npm = Test-Tool 'npm'
    & $npm '--version' *> $null
    $npmHealthy = $LASTEXITCODE -eq 0
    if ($npmHealthy) {
        $npmDirectory = Split-Path $npm -Parent
        $node = Join-Path $npmDirectory 'node.exe'
        $npmPrefixScript = Join-Path $npmDirectory 'node_modules\npm\bin\npm-prefix.js'
        if ((Test-Path -LiteralPath $node) -and (Test-Path -LiteralPath $npmPrefixScript)) {
            $npmPrefix = & $node $npmPrefixScript
            $npmCli = Join-Path $npmPrefix 'node_modules\npm\bin\npm-cli.js'
            $previousErrorAction = $ErrorActionPreference
            $ErrorActionPreference = 'Continue'
            & $node -e "const { createRequire } = require('module'); createRequire(process.argv[1]).resolve('path-scurry');" $npmCli *> $null
            $npmHealthy = $LASTEXITCODE -eq 0
            $ErrorActionPreference = $previousErrorAction
        }
    }
    if ($npmHealthy) {
        $npmDirectory = Split-Path $npm -Parent
        if (($env:PATH -split ';') -notcontains $npmDirectory) {
            $env:PATH = "$npmDirectory;$env:PATH"
        }
        return $npm
    }

    $npmVersion = '10.9.2'
    $toolRoot = Join-Path ([System.IO.Path]::GetTempPath()) "point-of-attention-ui-tools/npm-$npmVersion"
    $npmCommand = Join-Path $toolRoot 'npm.cmd'

    if (-not (Test-Path -LiteralPath $npmCommand)) {
        Write-Host "npm on PATH is broken; preparing a temporary npm $npmVersion..." -ForegroundColor Yellow
        $archive = Join-Path ([System.IO.Path]::GetTempPath()) "point-of-attention-ui-npm-$npmVersion.tgz"
        New-Item -ItemType Directory -Force -Path $toolRoot | Out-Null
        try {
            Invoke-WebRequest `
                -Uri "https://registry.npmjs.org/npm/-/npm-$npmVersion.tgz" `
                -OutFile $archive
            & tar -xzf $archive -C $toolRoot --strip-components=1
            if ($LASTEXITCODE -ne 0) {
                throw "Could not unpack temporary npm (exit code $LASTEXITCODE)."
            }

            $npmCli = Join-Path $toolRoot 'bin\npm-cli.js'
            Set-Content -LiteralPath $npmCommand -Value "@echo off`r`nnode `"$npmCli`" %*"
        }
        finally {
            Remove-Item -LiteralPath $archive -Force -ErrorAction SilentlyContinue
        }
    }

    $env:PATH = "$toolRoot;$env:PATH"
    & $npmCommand '--version' *> $null
    if ($LASTEXITCODE -ne 0) {
        throw "The temporary npm installation is not usable."
    }
    return $npmCommand
}

function Invoke-BuildAndTest {
    param(
        [Parameter(Mandatory)]
        [string]$Name,
        [Parameter(Mandatory)]
        [scriptblock]$Build,
        [scriptblock]$Test = {}
    )

    try {
        & $Build | Out-Host
        if (-not $SkipTests) {
            & $Test | Out-Host
        }
        return $true
    }
    catch {
        $message = $_.Exception.Message
        $failureMessages.Add("$Name`: $message")
        Write-Host "FAILED: $Name - $message" -ForegroundColor Red
        return $false
    }
}

function Invoke-TestsIfPresent {
    param(
        [Parameter(Mandatory)]
        [string]$Name,
        [Parameter(Mandatory)]
        [string]$Package,
        [Parameter(Mandatory)]
        [string]$Command,
        [Parameter()]
        [string[]]$Arguments = @()
    )

    $testFiles = Get-ChildItem -LiteralPath (Join-Path $root $Package) -Recurse -File |
        Where-Object {
            $_.FullName -notmatch '[\\/](node_modules|dist)[\\/]' -and
            $_.Name -match '\.(test|spec)\.(ts|tsx|js|jsx)$'
        }

    if (-not $testFiles) {
        Write-Host "$Name has no test files; skipping tests." -ForegroundColor Yellow
        return
    }

    Invoke-Step -Name $Name -Command $Command -Arguments $Arguments
}

function Test-NpmDependencies {
    param([Parameter(Mandatory)][string[]]$RequiredCommands)

    foreach ($command in $RequiredCommands) {
        if (-not (Test-Path -LiteralPath (Join-Path $root "node_modules\.bin\$command.cmd")) -and
            -not (Test-Path -LiteralPath (Join-Path $root "node_modules\.bin\$command"))) {
            return $false
        }
    }
    return $true
}

function Start-Demo {
    param(
        [Parameter(Mandatory)]
        [string]$Name,
        [Parameter(Mandatory)]
        [string]$Url,
        [Parameter(Mandatory)]
        [string]$ShellCommand
    )

    $shell = (Get-Process -Id $PID).Path
    $resolvedCommand = $ShellCommand.Replace('npm ', "& '$script:npm' ")
    Start-Process `
        -FilePath $shell `
        -WorkingDirectory $root `
        -ArgumentList @('-NoExit', '-Command', $resolvedCommand) | Out-Null

    $launches.Add([pscustomobject]@{
            Name = $Name
            Url  = $Url
        })
}

Push-Location $root
try {
    $npm = Resolve-Npm
    $script:npm = $npm

    $requiredCommands = [System.Collections.Generic.List[string]]::new()
    $requiredCommands.Add('tsc')
    $requiredCommands.Add('rollup')
    if ($selected.Contains('React') -or $selected.Contains('Vue')) {
        $requiredCommands.Add('vite')
    }
    if ($selected.Contains('Vue')) {
        $requiredCommands.Add('vue-tsc')
    }
    if ($selected.Contains('Angular')) {
        $requiredCommands.Add('ng')
    }

    $dependenciesReady = Test-NpmDependencies -RequiredCommands $requiredCommands
    if (-not $SkipInstall -or -not $dependenciesReady) {
        if ($SkipInstall -and -not $dependenciesReady) {
            Write-Host 'Local npm dependencies are missing; restoring them despite -SkipInstall.' -ForegroundColor Yellow
        }
        Invoke-Step -Name 'Install npm workspace dependencies' -Command $npm -Arguments @(
            'install',
            '--no-package-lock',
            '--legacy-peer-deps'
        )
        $dependenciesReady = Test-NpmDependencies -RequiredCommands $requiredCommands
        if (-not $dependenciesReady) {
            throw 'npm dependency installation completed without creating all required local commands.'
        }
    }

    $needsDotnet = $selected.Contains('Blazor')
    $dotnet = $null
    if ($needsDotnet) {
        $dotnet = Test-Tool 'dotnet'
        if (-not $SkipInstall) {
            Invoke-Step -Name 'Restore Blazor dependencies' -Command $dotnet -Arguments @(
                'restore',
                'demos/blazor/BlazorDemo.csproj'
            )
        }
    }

    $coreReady = Invoke-BuildAndTest -Name 'Core' `
        -Build {
            Invoke-Step -Name 'Build core package' -Command $npm -Arguments @(
                'run',
                'build:core'
            )
        } `
        -Test {
            Invoke-TestsIfPresent -Name 'Test core package' -Package 'packages/core' -Command $npm -Arguments @(
                '-w',
                'packages/core',
                'run',
                'test'
            )
        }

    if ($coreReady -and $selected.Contains('React')) {
        $ready = Invoke-BuildAndTest -Name 'React' `
            -Build {
                Invoke-Step -Name 'Build React wrapper' -Command $npm -Arguments @(
                    '-w', 'packages/react', 'run', 'build'
                )
                Invoke-Step -Name 'Build React demo' -Command $npm -Arguments @(
                    '-w', 'demos/react', 'run', 'build'
                )
            } `
            -Test {
                Invoke-TestsIfPresent -Name 'Test React wrapper' -Package 'packages/react' -Command $npm -Arguments @(
                    '-w', 'packages/react', 'run', 'test'
                )
            }
        if ($ready -and -not $NoStart) {
            Start-Demo -Name 'React' -Url "http://127.0.0.1:$ReactPort/" `
                -ShellCommand "npm -w demos/react run dev -- --host 127.0.0.1 --port $ReactPort --strictPort"
        }
    }

    if ($coreReady -and $selected.Contains('Vue')) {
        $ready = Invoke-BuildAndTest -Name 'Vue' `
            -Build {
                Invoke-Step -Name 'Build Vue wrapper' -Command $npm -Arguments @(
                    '-w', 'packages/vue', 'run', 'build'
                )
                Invoke-Step -Name 'Build Vue demo' -Command $npm -Arguments @(
                    '-w', 'demos/vue', 'run', 'build'
                )
            } `
            -Test {
                Invoke-TestsIfPresent -Name 'Test Vue wrapper' -Package 'packages/vue' -Command $npm -Arguments @(
                    '-w', 'packages/vue', 'run', 'test'
                )
            }
        if ($ready -and -not $NoStart) {
            Start-Demo -Name 'Vue' -Url "http://127.0.0.1:$VuePort/" `
                -ShellCommand "npm -w demos/vue run dev -- --host 127.0.0.1 --port $VuePort --strictPort"
        }
    }

    if ($coreReady -and $selected.Contains('Angular')) {
        $ready = Invoke-BuildAndTest -Name 'Angular' `
            -Build {
                Invoke-Step -Name 'Build Angular wrapper' -Command $npm -Arguments @(
                    '-w', 'packages/angular', 'run', 'build'
                )
                Invoke-Step -Name 'Build Angular demo' -Command $npm -Arguments @(
                    '-w', 'demos/angular', 'run', 'build'
                )
            } `
            -Test {
                Invoke-Step -Name 'Test Angular demo' -Command $npm -Arguments @(
                    '-w', 'demos/angular', 'run', 'test'
                )
            }
        if ($ready -and -not $NoStart) {
            Start-Demo -Name 'Angular' -Url "http://127.0.0.1:$AngularPort/" `
                -ShellCommand "npm -w demos/angular run dev -- --host 127.0.0.1 --port $AngularPort"
        }
    }

    if ($coreReady -and $selected.Contains('Blazor') -and $dotnet) {
        $ready = Invoke-BuildAndTest -Name 'Blazor' `
            -Build {
                Invoke-Step -Name 'Build Blazor wrapper and demo' -Command $dotnet -Arguments @(
                    'build',
                    'demos/blazor/BlazorDemo.csproj',
                    '-c',
                    'Release'
                )
            }
        if ($ready -and -not $NoStart) {
            Start-Demo -Name 'Blazor' -Url "http://127.0.0.1:$BlazorPort/" `
                -ShellCommand "dotnet run --project demos/blazor/BlazorDemo.csproj --urls http://127.0.0.1:$BlazorPort"
        }
    }
}
finally {
    Pop-Location
}

Write-Host "`nDemo summary" -ForegroundColor Cyan
if ($NoStart) {
    Write-Host 'Servers were not started (-NoStart).' -ForegroundColor Yellow
}
foreach ($launch in $launches) {
    Write-Host "$($launch.Name): $($launch.Url)"
}

if ($failureMessages.Count -gt 0) {
    Write-Host "`nFailures" -ForegroundColor Red
    foreach ($message in $failureMessages) {
        Write-Host "- $message" -ForegroundColor Red
    }
    exit 1
}

Write-Host 'Build and tests completed successfully.' -ForegroundColor Green
