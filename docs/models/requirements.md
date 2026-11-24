# 3D Model Requirements

For optimal performance and accurate defect marking with Point of Attention UI, your 3D models should meet specific technical requirements. This guide outlines the essential criteria for preparing models that work seamlessly with our library.

## Supported Formats

Point of Attention UI supports industry-standard 3D formats:

### Primary Format: GLB/GLTF
- **GLB** (Binary format) - Recommended for production
- **GLTF** (JSON-based format) - Suitable for development

These formats provide the best balance of file size, loading performance, and compatibility with our Three.js-based engine.

## Geometry Requirements

### Mesh Quality
- **Polygon Count**: Optimize for target device performance
  - Desktop/Web: Up to 1 million polygons acceptable
  - Mobile/Tablet: Under 200,000 polygons recommended
- **Triangle Orientation**: Ensure consistent winding order (counter-clockwise)
- **Normals**: Properly calculated face normals for accurate lighting and picking

### Surface Preparation
For accurate defect decal application, models should have:

#### 1. Adequate UV Mapping
- Complete UV unwrapping for all mesh surfaces
- Minimal UV distortion in areas requiring defect marking
- Proper UV seams placement to avoid decal stretching

#### 2. Surface Detail
- Sufficient geometric detail for defect placement precision
- Avoid overly smooth or featureless surfaces where decals may not anchor properly
- Clear distinction between different model components/parts

#### 3. Mesh Structure
- Individual named meshes for each logical component (e.g., "Door_Handle", "Engine_Block")
- Proper hierarchy organization for easy part visibility control
- Clean topology without non-manifold geometry or loose vertices

## Material Specifications

### PBR Materials (Recommended)
Point of Attention UI works best with Physically-Based Rendering materials:

#### Base Color
- RGB textures in JPEG/PNG format
- Resolution: 1024x1024 or higher for detailed surfaces
- Proper color space (sRGB for diffuse maps)

#### Metallic/Roughness
- Combined or separate metallic/roughness maps
- Values within realistic ranges (0.0-1.0)
- Metallic maps should clearly distinguish metal from non-metal surfaces

#### Normal Maps
- Tangent space normal maps for surface detail enhancement
- 8-bit PNG format recommended
- Proper blue channel dominance (128,128,255 neutral)

#### Ambient Occlusion
- Optional but recommended for realistic shading
- Grayscale maps (black=occluded, white=fully lit)
- Helps with depth perception during inspection

## Texture Guidelines

### Resolution Standards
- **Primary Surfaces**: 1024x1024 minimum
- **Secondary Surfaces**: 512x512 acceptable
- **Detail Areas**: 2048x2048 for critical inspection zones

### File Formats
- **Textures**: PNG (lossless) or JPEG (high quality)
- **Compression**: Minimal to preserve detail for inspection
- **Color Profiles**: sRGB for color textures, Linear for data maps

### Naming Convention
Textures should follow clear naming patterns:
```
modelname_BaseColor.png
modelname_MetallicRoughness.png
modelname_Normal.png
modelname_Occlusion.png
```

## Performance Optimization

### Level of Detail (LOD)
For complex models, consider multiple LOD versions:
- **High Detail**: Full inspection mode
- **Medium Detail**: Navigation mode
- **Low Detail**: Overview mode

### File Size Management
- **Target Sizes**:
  - Simple models: Under 10MB GLB
  - Complex models: Under 50MB GLB
  - Mobile optimized: Under 15MB GLB

### Compression Techniques
- **Texture Compression**: Use appropriate formats (ETC, ASTC, DXT)
- **Mesh Optimization**: Remove unnecessary vertices and polygons
- **Draco Compression**: Enable for significant file size reduction

## Decal Application Requirements

For optimal defect marker placement and visualization:

### Surface Characteristics
- **Smooth Surfaces**: Ensure adequate triangle density for decal anchoring
- **Curved Geometry**: Provide sufficient geometric detail for proper decal orientation
- **Flat Areas**: Minimize for better decal visibility and interaction

### Mesh Component Separation
Each logical part should be a separate mesh for:
- Individual defect tracking
- Part visibility control
- Accurate raycasting and picking
- Component-specific metadata attachment

### Naming Conventions
Use descriptive, consistent naming:
```
Chassis_MainBody
Wheel_FrontLeft
Door_Handle_Rear
Engine_Exhaust_Manifold
```

## Validation Checklist

Before using models with Point of Attention UI, verify:

### ✅ Technical Requirements
- [ ] GLB/GLTF format
- [ ] Proper UV mapping on all surfaces
- [ ] Named mesh components
- [ ] Optimized polygon count
- [ ] Correct material setup
- [ ] Appropriate texture resolution
- [ ] Valid geometry (no non-manifold edges)

### ✅ Performance Criteria
- [ ] File size within target limits
- [ ] Load time under 5 seconds
- [ ] Smooth interaction at 60fps
- [ ] Mobile-compatible version available

### ✅ Inspection Readiness
- [ ] Clear surface differentiation
- [ ] Adequate detail for defect marking
- [ ] Logical component grouping
- [ ] Consistent naming convention

## Troubleshooting Common Issues

### Loading Problems
- **Symptom**: Model fails to load or displays incorrectly
- **Solution**: Validate GLTF/GLB using online validators
- **Tool**: Use glTF Validator or Babylon.js Sandbox

### Decal Placement Issues
- **Symptom**: Defect markers appear misaligned or float above surface
- **Solution**: Check normal vectors and UV mapping
- **Tool**: Use Blender or similar to inspect mesh normals

### Performance Degradation
- **Symptom**: Slow interaction or frame drops
- **Solution**: Optimize polygon count and texture sizes
- **Tool**: Use mesh optimization tools like Simplygon

## Recommended Tools

### Modeling Software
- **Blender** (Free, comprehensive)
- **Autodesk Maya** (Professional)
- **Autodesk 3ds Max** (Professional)

### Optimization Tools
- **glTF Pipeline** (Command-line optimization)
- **Babylon.js Sandbox** (Online validation)
- **Facebook 3D Asset Manager** (Quick optimization)

### Validation
- **Khronos glTF Validator** (Official validator)
- **Sketchfab Model Checker** (Online tool)

## Best Practices Summary

1. **Start Simple**: Begin with basic geometry and gradually add detail
2. **Test Early**: Validate models with Point of Attention UI during development
3. **Optimize Iteratively**: Balance quality with performance based on target platforms
4. **Document Components**: Maintain clear records of mesh names and purposes
5. **Plan for Updates**: Structure models to accommodate future modifications

Following these requirements ensures that your 3D models will work seamlessly with Point of Attention UI, providing users with an optimal defect inspection experience across all supported platforms and devices.