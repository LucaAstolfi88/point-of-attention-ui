using Microsoft.JSInterop;

namespace PointOfAttention.UI.Blazor;

// ---------------------------------------------------------------------------
// 3D primitives
// ---------------------------------------------------------------------------

/// <summary>3D position.</summary>
public sealed class Vec3
{
    public double X { get; set; }
    public double Y { get; set; }
    public double Z { get; set; }
}

/// <summary>Quaternion.</summary>
public sealed class Quat
{
    public double X { get; set; }
    public double Y { get; set; }
    public double Z { get; set; }
    public double W { get; set; }
}

// ---------------------------------------------------------------------------
// i18n — Localisation
// ---------------------------------------------------------------------------

/// <summary>Localisation strings for the viewer UI.</summary>
public sealed class ViewerLocale
{
    /// <summary>Modal title: "Seleziona difetto" / "Select defect".</summary>
    public string ModalTitle { get; set; } = "Seleziona difetto";

    /// <summary>Subtitle prefix: "Parte:" / "Part:".</summary>
    public string ModalPartLabel { get; set; } = "Parte:";

    /// <summary>Cancel button: "Annulla" / "Cancel".</summary>
    public string ModalCancel { get; set; } = "Annulla";
}

// ---------------------------------------------------------------------------
// Modal selection (replaces context menu)
// ---------------------------------------------------------------------------

/// <summary>An option the user can pick from the modal after clicking a mesh.</summary>
public sealed class SelectionOption
{
    public string Id { get; set; } = string.Empty;
    public string Label { get; set; } = string.Empty;
    public string? Severity { get; set; }
}

/// <summary>Emitted by the engine when the user clicks a mesh point.</summary>
public sealed class SelectionRequest
{
    public string Id { get; set; } = string.Empty;
    public string? MeshName { get; set; }
    public Vec3? Point { get; set; }
    public Vec3? Normal { get; set; }
    public Vec3? CameraPosition { get; set; }
    public Quat? CameraQuaternion { get; set; }
    public List<SelectionOption> Options { get; set; } = new();
}

// ---------------------------------------------------------------------------
// Snapshot report
// ---------------------------------------------------------------------------

/// <summary>Single snapshot image (base64 PNG).</summary>
public sealed class SnapshotImage
{
    public string View { get; set; } = string.Empty;
    public string DataUri { get; set; } = string.Empty;
    public string CapturedAt { get; set; } = string.Empty;
}

/// <summary>Full snapshot report after every defect add/change.</summary>
public sealed class SnapshotReport
{
    public string Id { get; set; } = string.Empty;
    public List<WarningDefect> Defects { get; set; } = new();
    public List<SnapshotImage> Images { get; set; } = new();
    public string GeneratedAt { get; set; } = string.Empty;
}

// ---------------------------------------------------------------------------
// Defect
// ---------------------------------------------------------------------------

/// <summary>A defect (point of attention) anchored to the 3D model.</summary>
public sealed class WarningDefect
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string? Label { get; set; }
    public string? MeshName { get; set; }
    public Vec3? Position { get; set; }
    public Vec3? Orientation { get; set; }
    public Vec3? CameraPosition { get; set; }
    public Quat? CameraQuaternion { get; set; }
    public string? Severity { get; set; } = "error";
    public Dictionary<string, object?>? Metadata { get; set; }
}

// ---------------------------------------------------------------------------
// Part visibility
// ---------------------------------------------------------------------------

/// <summary>Controls the visibility of a single part (mesh) of the model.</summary>
public sealed class ModelPartVisibility
{
    public string MeshName { get; set; } = string.Empty;
    public bool Visible { get; set; } = true;
}

/// <summary>Describes a loaded model part.</summary>
public sealed class ViewerPart
{
    public string Name { get; set; } = string.Empty;
    public bool Visible { get; set; } = true;
}
