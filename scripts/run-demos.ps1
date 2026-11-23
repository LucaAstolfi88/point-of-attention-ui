[CmdletBinding()]
param(
    [ValidateSet('Core', 'React', 'Vue', 'Angular', 'Blazor')]
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

foreach ($name in $Stack) {
    [void]$selected.Add($name)
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

function Invoke-BuildAndTest {
    param(
        [Parameter(Mandatory)]
        [string]$Name,
        [Parameter(Mandatory)]
        [scriptblock]$Build,
        [scriptblock]$Test = {}
    )

    try {
        & $Build
        if (-not $SkipTests) {
            & $Test
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
    Start-Process `
        -FilePath $shell `
        -WorkingDirectory $root `
        -ArgumentList @('-NoExit', '-Command', $ShellCommand) | Out-Null

    $launches.Add([pscustomobject]@{
            Name = $Name
            Url  = $Url
        })
}

Push-Location $root
try {
    $npm = Test-Tool 'npm'

    if (-not $SkipInstall) {
        Invoke-Step -Name 'Install npm workspace dependencies' -Command $npm -Arguments @(
            'install',
            '--no-package-lock',
            '--legacy-peer-deps'
        )
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
            Invoke-Step -Name 'Test core package' -Command $npm -Arguments @(
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
                Invoke-Step -Name 'Test React wrapper' -Command $npm -Arguments @(
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
                Invoke-Step -Name 'Test Vue wrapper' -Command $npm -Arguments @(
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
