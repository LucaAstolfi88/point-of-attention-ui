using Microsoft.JSInterop;

namespace PointOfAttention.UI.Blazor;

/// <summary>Context-menu event raised when a mesh is clicked.</summary>
public sealed class ContextMenuEvent
{
    public double ClientX { get; set; }
    public double ClientY { get; set; }
    public string MeshName { get; set; } = string.Empty;
}
