# Styling and Customization Guide

Point of Attention UI provides extensive customization options to match your brand identity and application design. This guide covers all styling possibilities, from simple color changes to complete UI redesigns.

## CSS Custom Properties

The easiest way to customize the appearance is through CSS custom properties. All colors, spacing, and typography can be overridden by defining custom values.

### Default Variables

```css
:root {
  /* Modal backdrop */
  --wv-backdrop-bg: rgba(0, 0, 0, 0.45);
  
  /* Modal container */
  --wv-modal-bg: #ffffff;
  --wv-modal-radius: 12px;
  --wv-modal-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  --wv-modal-padding: 24px;
  --wv-modal-min-width: 280px;
  --wv-modal-max-width: 380px;
  
  /* Modal title */
  --wv-title-color: #1a1a1a;
  --wv-title-size: 18px;
  
  /* Modal subtitle */
  --wv-subtitle-color: #888;
  --wv-subtitle-size: 13px;
  
  /* Option buttons */
  --wv-option-bg: #fff;
  --wv-option-bg-hover: #f0f7ff;
  --wv-option-border: #d9d9d9;
  --wv-option-border-hover: #1890ff;
  --wv-option-color: #333;
  --wv-option-color-hover: #1890ff;
  --wv-option-radius: 8px;
  --wv-option-padding: 10px 14px;
  --wv-option-font-size: 14px;
  
  /* Cancel button */
  --wv-cancel-bg: #f5f5f5;
  --wv-cancel-bg-hover: #ebebeb;
  --wv-cancel-color: #666;
  --wv-cancel-radius: 8px;
  --wv-cancel-padding: 8px 14px;
  --wv-cancel-font-size: 14px;
  
  /* Severity indicators */
  --wv-severity-info: #2196f3;
  --wv-severity-warning: #ff9800;
  --wv-severity-error: #f44336;
  
  /* Animations */
  --wv-transition-speed: 0.2s;
  
  /* Viewer background */
  --wv-viewer-bg: #e1e2e2;
}
```

### Customizing Colors

To change the color scheme, simply override the CSS variables in your application:

```css
/* Custom dark theme */
:root {
  --wv-backdrop-bg: rgba(0, 0, 0, 0.7);
  --wv-modal-bg: #2d2d2d;
  --wv-title-color: #ffffff;
  --wv-subtitle-color: #cccccc;
  --wv-option-bg: #3d3d3d;
  --wv-option-bg-hover: #4d4d4d;
  --wv-option-border: #555555;
  --wv-option-border-hover: #1890ff;
  --wv-option-color: #ffffff;
  --wv-cancel-bg: #3d3d3d;
  --wv-cancel-bg-hover: #4d4d4d;
  --wv-cancel-color: #cccccc;
}

/* Brand-specific colors */
[data-theme="brand"] {
  --wv-option-border-hover: #007acc;
  --wv-option-color-hover: #007acc;
  --wv-severity-info: #007acc;
  --wv-severity-warning: #ffa500;
  --wv-severity-error: #dc3545;
}
```

### Customizing Typography

Adjust fonts and text sizes to match your design system:

```css
:root {
  --wv-title-size: 20px;
  --wv-subtitle-size: 14px;
  --wv-option-font-size: 16px;
  --wv-cancel-font-size: 16px;
}

/* Custom font family */
.warning-modal {
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
```

### Customizing Spacing and Radius

Modify the visual weight and spacing of UI elements:

```css
:root {
  --wv-modal-radius: 16px;
  --wv-modal-padding: 32px;
  --wv-option-radius: 12px;
  --wv-option-padding: 16px 20px;
  --wv-cancel-radius: 12px;
  --wv-cancel-padding: 12px 20px;
}
```

## Complete CSS Override

For more extensive customization, you can provide your own CSS file that completely replaces the default styling. Import your custom CSS after the library's CSS:

```javascript
// Import library styles first
import '@point-of-attention-ui/core/point-of-attention-ui.css';

// Then import your custom styles
import './custom-styles.css';
```

Example custom CSS file:

```css
/* custom-styles.css */
.warning-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
}

.warning-modal {
  background: #1a1a1a;
  border-radius: 16px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
  padding: 32px;
  min-width: 320px;
  max-width: 420px;
  max-height: 80vh;
  overflow-y: auto;
  width: 95vw;
  border: 1px solid #333;
}

.warning-modal-title {
  margin: 0 0 8px;
  font-size: 22px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.3;
  text-align: center;
}

.warning-modal-subtitle {
  display: block;
  margin-bottom: 24px;
  font-size: 14px;
  color: #aaaaaa;
  text-align: center;
}

.warning-modal-options {
  list-style: none;
  padding: 0;
  margin: 0 0 24px;
}

.warning-modal-option-btn {
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  padding: 16px 20px;
  border: 2px solid #333;
  border-radius: 12px;
  background: #2d2d2d;
  color: #ffffff;
  font-size: 16px;
  font-family: inherit;
  cursor: pointer;
  text-align: left;
  transition: all 0.2s ease;
  margin-bottom: 12px;
}

.warning-modal-option-btn:hover {
  border-color: #007acc;
  background: #333333;
  transform: translateY(-2px);
}

.warning-modal-severity-dot {
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  flex-shrink: 0;
}

.warning-modal-cancel {
  width: 100%;
  padding: 16px 20px;
  border: 2px solid #333;
  border-radius: 12px;
  background: #2d2d2d;
  color: #cccccc;
  font-size: 16px;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s ease;
}

.warning-modal-cancel:hover {
  background: #333333;
  color: #ffffff;
  border-color: #444;
}
```

## Dark Theme Implementation

Create a seamless dark theme experience:

```css
/* Dark theme variables */
@media (prefers-color-scheme: dark) {
  :root {
    --wv-backdrop-bg: rgba(0, 0, 0, 0.7);
    --wv-modal-bg: #1e1e1e;
    --wv-title-color: #ffffff;
    --wv-subtitle-color: #bbbbbb;
    --wv-option-bg: #2d2d2d;
    --wv-option-bg-hover: #3d3d3d;
    --wv-option-border: #444444;
    --wv-option-border-hover: #007acc;
    --wv-option-color: #ffffff;
    --wv-cancel-bg: #2d2d2d;
    --wv-cancel-bg-hover: #3d3d3d;
    --wv-cancel-color: #cccccc;
  }
}

/* Or with a theme class */
.theme-dark {
  --wv-backdrop-bg: rgba(0, 0, 0, 0.7);
  --wv-modal-bg: #1e1e1e;
  --wv-title-color: #ffffff;
  --wv-subtitle-color: #bbbbbb;
  --wv-option-bg: #2d2d2d;
  --wv-option-bg-hover: #3d3d3d;
  --wv-option-border: #444444;
  --wv-option-border-hover: #007acc;
  --wv-option-color: #ffffff;
  --wv-cancel-bg: #2d2d2d;
  --wv-cancel-bg-hover: #3d3d3d;
  --wv-cancel-color: #cccccc;
}
```

## Responsive Customization

Adapt the UI for different screen sizes:

```css
/* Tablet adjustments */
@media (max-width: 1024px) {
  :root {
    --wv-modal-padding: 20px;
    --wv-option-padding: 14px 18px;
    --wv-cancel-padding: 14px 18px;
  }
}

/* Mobile adjustments */
@media (max-width: 768px) {
  :root {
    --wv-modal-radius: 12px 12px 0 0;
    --wv-modal-padding: 24px 16px;
    --wv-modal-max-width: none;
    --wv-modal-min-width: none;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: auto;
    max-height: 70vh;
    border-radius: 24px 24px 0 0;
  }
}
```

## Accessibility Considerations

Ensure your customizations maintain accessibility standards:

```css
/* Ensure sufficient color contrast */
.warning-modal-option-btn:focus-visible,
.warning-modal-cancel:focus-visible {
  outline: 2px solid var(--wv-option-border-hover, #1890ff);
  outline-offset: 2px;
}

/* Maintain readable font sizes */
@media (prefers-reduced-motion: reduce) {
  :root {
    --wv-transition-speed: 0s;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  :root {
    --wv-backdrop-bg: rgba(0, 0, 0, 0.9);
    --wv-option-border: #ffffff;
    --wv-cancel-border: #ffffff;
  }
}
```

## Brand Integration Example

Here's how to integrate with a specific brand identity:

```css
/* Brand integration example */
[data-brand="company-name"] {
  /* Brand colors */
  --brand-primary: #007acc;
  --brand-secondary: #28a745;
  --brand-danger: #dc3545;
  
  /* Apply to viewer */
  --wv-option-border-hover: var(--brand-primary);
  --wv-option-color-hover: var(--brand-primary);
  --wv-severity-info: var(--brand-primary);
  --wv-severity-warning: var(--brand-secondary);
  --wv-severity-error: var(--brand-danger);
  
  /* Custom branding elements */
  .warning-modal::before {
    content: "";
    display: block;
    height: 4px;
    background: linear-gradient(90deg, var(--brand-primary), var(--brand-secondary));
    border-radius: 2px 2px 0 0;
    margin: -24px -24px 20px -24px;
  }
}
```

## Testing Your Customizations

Always test your customizations across different scenarios:

1. **Different screen sizes**: Ensure responsive behavior
2. **Various color schemes**: Test light/dark modes
3. **Accessibility features**: Check contrast ratios and keyboard navigation
4. **Browser compatibility**: Verify across supported browsers
5. **Performance impact**: Monitor for any rendering delays

## Best Practices

1. **Maintain consistency**: Keep UI patterns consistent with your overall design system
2. **Consider accessibility**: Ensure sufficient contrast and keyboard navigation
3. **Test thoroughly**: Validate customizations across different devices and browsers
4. **Document changes**: Keep track of custom CSS variables and their purposes
5. **Performance conscious**: Avoid overly complex CSS that might impact rendering performance

With these customization options, you can seamlessly integrate Point of Attention UI into any design system while maintaining the powerful 3D defect inspection capabilities.