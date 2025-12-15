# Token Implementation Guide

## Overview
This project has migrated from an old token structure (`_variables.scss`) to a new **external token system** that aligns with Angular 20 and modern design system practices. This major architectural change was completed on the `angular-20-tokens` branch and merged to main.

---

## Key Concepts

### 1. Token Structure

#### Old Approach (Deprecated)
```scss
@use '_variables.scss' as vars;
gap: vars.$size-relaxed-spacing-m;
```

#### New Approach (Current)
```scss
// SCSS variables
@use 'external-tokens/foundation' as foundation;
gap: foundation.$foundation-spacing-m;

// OR CSS custom properties (recommended - theme-aware)
gap: var(--foundation-spacing-m);
```

### 2. Directory Organization
```
external-tokens/
├── foundation/          # Base design tokens (spacing, sizing, colors)
├── component/          # Component-specific tokens
│   ├── vars-card.scss
│   ├── vars-topappbar.scss
│   ├── vars-divider.scss
│   └── [others]
├── foundation-color/   # Color system tokens
├── breakpoints/        # Responsive breakpoints
└── density/           # Density variations (condensed/relaxed)
```

### 3. Token Types

#### Color Tokens
- **CSS Variables**: `--foundation-ui-textandicon-high`, `--foundation-ui-background-lowest`
- **Figma Variables**: `foundation.ui.textandicon.high`
- **Theme-aware**: Automatically switch between light/dark mode

#### Spacing/Sizing Tokens
- **Spacing**: `--foundation-spacing-{none|3xs|2xs|xs|s|m|l|xl|2xl|3xl}`
- **Dynamic Dimensions**: `--base-dimension-dynamic-s{00-20}`
- **Density-aware**: Adjusts based on condensed/relaxed theme

#### Typography Tokens
- **CSS Variables**: `--heading-high`, `--body-medium-default`, `--label-medium`
- **Properties**: Include size, line-height, weight, and letter-spacing
- **Examples**:
  - `--heading-high`: 76px / 4.75rem, weight 300
  - `--body-medium-default`: 16px / 1rem, weight 300
  - `--label-medium`: 14px / 0.875rem, weight 500

### 4. Implementation Benefits

✅ **Theme-Aware**: Tokens automatically adjust for light/dark mode  
✅ **Density Support**: Single token changes between condensed/relaxed layouts  
✅ **Runtime Switching**: No CSS recompilation needed  
✅ **Design-Dev Alignment**: Matches Figma variable names  
✅ **Maintainability**: Change once in token files, updates everywhere

---

## Practical Examples

### Component Styling
```scss
.my-component {
  background: var(--foundation-ui-background-lowest);
  color: var(--foundation-ui-textandicon-high);
  padding: var(--foundation-spacing-m);
  font-size: var(--foundation-font-size-base);
}
```

### Density-Aware Sizing
```scss
// Relaxed density (default)
body.theme-relaxed,
body:not(.theme-condensed) {
  .component {
    height: var(--base-dimension-dynamic-s11);
    padding: var(--size-spacing-s);
  }
}

// Condensed density
body.theme-condensed {
  .component {
    height: var(--base-dimension-dynamic-s11);
    padding: var(--size-spacing-xs);
  }
}
```

### Theme-Specific Overrides
```scss
html,
html .theme-light,
html .theme-dark {
  --mat-component-property: var(--foundation-token);
  --mat-component-size: var(--size-token);
  --mat-component-spacing: var(--size-spacing-token);
}
```

### Material Component Integration
```scss
@use '@angular/material' as mat;
@use '@jeppesen-foreflight/dls-global-assets/dist/scss/base/external-tokens/foundation' as foundation;

:root {
  @include mat.input-theme(m3.$dark-theme);
}

.theme-light {
  @include mat.input-color(m3.$light-theme);
}

// Token-based sizing instead of hardcoded density
body.theme-relaxed {
  .mat-mdc-form-field {
    --mat-form-field-container-height: var(--base-dimension-dynamic-s11);
  }
}
```

---

## Migration Status

### ✅ Completed

- **10 library entry points** migrated
  - @jeppesen-foreflight/dp-dls-global-angular
  - breadcrumb, icon-registry, navigation-drawer, navigation-rail
  - sidesheet, snackbar, top-app-bar, theme-toggle, user-profile

- **Material components** using new tokens
  - Card, Toolbar, Divider, Select, Input, Form Field
  - Checkbox, Radio, Button, and more

- **34 Storybook stories** updated with new token system

- **Typography system** fully integrated
  - Material core theme typography
  - Demo application typography
  - Storybook typography

- **Build validation**
  - Library build: ✅ All entry points successful
  - Demo build: ✅ 1.72 MB bundle, all budgets met
  - Storybook build: ✅ Published to /public

---

## Usage Guidelines

### For Component Development

1. **Always use CSS custom properties** for theme compatibility
2. **Use density-aware tokens** instead of hardcoded Material density mixins
3. **Apply body selectors** for density variants (`body.theme-condensed`, `body.theme-relaxed`)
4. **Reference Figma variables** for design-dev alignment

### For Consuming Applications

1. **Import foundation tokens**:
   ```scss
   @use '@jeppesen-foreflight/dls-global-assets/dist/scss/base/external-tokens/foundation';
   ```

2. **Apply theme classes** to enable switching:
   ```html
   <body class="theme-light theme-relaxed">
   ```

3. **Use CSS variables** in component styles:
   ```css
   .my-element {
     color: var(--foundation-ui-textandicon-high);
     background: var(--foundation-ui-background-lowest);
   }
   ```

---

## Reference Documentation

- **[colors.mdx](projects/design/dp-dls-global-angular/stories/Atmosphere%20Themes/Color/colors.mdx)**: Complete color token reference with CSS/Figma variable mappings
- **[typography.mdx](projects/design/dp-dls-global-angular/stories/Atmosphere%20Themes/Typography/typography.mdx)**: Typography token specifications
- **[DENSITY_STANDARDIZATION_GUIDE.md](DENSITY_STANDARDIZATION_GUIDE.md)**: Best practices for density implementation
- **[MIGRATION_SUMMARY.md](MIGRATION_SUMMARY.md)**: Detailed migration changelog

---

## Common Token Reference

### Color Tokens
| CSS Variable | Figma Variable | Use Case |
|-------------|----------------|----------|
| `--foundation-ui-textandicon-high` | `foundation.ui.textandicon.high` | Primary text |
| `--foundation-ui-textandicon-medium` | `foundation.ui.textandicon.medium` | Secondary text |
| `--foundation-ui-background-lowest` | `foundation.ui.background.lowest` | Page background |
| `--foundation-ui-background-low` | `foundation.ui.background.low` | Card background |
| `--color-interactive-primary-textandicon-primary-default` | `foundation.interactive.primary.textandicon.primary.default` | Primary actions |

### Spacing Tokens
| Token | Relaxed | Condensed |
|-------|---------|-----------|
| `--foundation-spacing-xs` | 4px | 4px |
| `--foundation-spacing-s` | 8px | 6px |
| `--foundation-spacing-m` | 16px | 12px |
| `--foundation-spacing-l` | 24px | 18px |
| `--foundation-spacing-xl` | 32px | 24px |

### Dynamic Dimension Tokens (Density-Aware)
| Token | Relaxed | Condensed |
|-------|---------|-----------|
| `--base-dimension-dynamic-s11` | 48px | 40px |
| `--base-dimension-dynamic-s10` | 40px | 32px |
| `--base-dimension-dynamic-s09` | 32px | 28px |

---

## Migration from Old System

### Before (❌ Old)
```scss
@use '@jeppesen-foreflight/dls-global-assets/dist/scss/base/_variables.scss' as vars;

.component {
  gap: vars.$size-relaxed-spacing-m;
  height: 48px;
  
  &.condensed {
    height: 40px;
  }
}

// Hardcoded Material density
@include mat.checkbox-density(-2);
```

### After (✅ New)
```scss
@use '@jeppesen-foreflight/dls-global-assets/dist/scss/base/external-tokens/foundation' as foundation;

.component {
  gap: var(--foundation-spacing-m);
}

body.theme-relaxed,
body:not(.theme-condensed) {
  .component {
    height: var(--base-dimension-dynamic-s11);
  }
}

body.theme-condensed {
  .component {
    height: var(--base-dimension-dynamic-s11);
  }
}
```

---

## Key Principles

1. **Token-First Approach**: All styling uses design tokens for consistency
2. **Runtime Flexibility**: Themes and density switch without recompilation
3. **Design System Alignment**: Tokens mirror Figma variables exactly
4. **Cascading Architecture**: `html` for global tokens, `body` for component behavior
5. **Progressive Enhancement**: Components gracefully adapt to theme changes

---

## Support & Questions

For questions about token implementation or migration assistance, refer to:
- Project documentation in `/docs`
- Storybook examples at `http://localhost:6006`
- Team design system guidelines

**Last Updated:** December 15, 2025  
**Version:** Angular 20 Token System (Merged to main)
