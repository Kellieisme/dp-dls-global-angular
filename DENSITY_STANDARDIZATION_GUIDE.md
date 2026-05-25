# Density Standardization Guide

## Overview
This document outlines the standardized approach for implementing density tokens and theming across all Material components in the Atmosphere design system.

## Current State Analysis

### Inconsistencies Found
- **Selector Patterns**: Mixed usage of `html .theme-*`, `body.theme-*`, and bare `.theme-*`
- **Density Implementation**: Three different approaches found:
  1. Hardcoded Material density mixins (`@include mat.component-density(-2)`)
  2. Theme classes with hardcoded density (`html .theme-condensed { @include mat.checkbox-density(-2) }`)
  3. Design tokens with body selectors (✅ **CORRECT** - form-field, input, select)
- **Variable Scope**: Inconsistent use of `html,` vs `html .theme-light,` for CSS custom properties

### Components Using Non-Standard Patterns

**Phase 1 - Critical (Require Immediate Updates):**
- `_checkbox.scss` - Uses `html .theme-condensed` with `mat.checkbox-density(-2)` and `(0)`
- `_datepicker.scss` - Uses bare `.theme-condensed` with `mat.datepicker-density(-2)` and `(-4)`
- `_radio.scss` - Uses `html .theme-condensed` with custom token sizing (no density mixin)

**Phase 2 - Standardization Needed:**
- `_list.scss`
- `_menu.scss`
- `_table.scss`
- `_tooltip.scss`
- `_dialog.scss`
- `_toolbar.scss`
- `_card.scss`

## Recommended Standards

### 1. Selector Pattern
**Use `body.theme-relaxed` and `body.theme-condensed` consistently**

**Rationale:**
- ✅ Storybook applies density classes to `document.body`
- ✅ Proper specificity for component overrides
- ✅ Clear separation: `html` for global tokens, `body` for component behavior
- ✅ Already implemented successfully in form components

**Pattern:**
```scss
body.theme-relaxed,
body:not(.theme-condensed) {
  .component {
    // Relaxed density styles using design tokens
  }
}

body.theme-condensed {
  .component {
    // Condensed density styles using design tokens
  }
}
```

### 2. Density Implementation
**Migrate from Material's hardcoded density mixins to design tokens**

**Rationale:**
- ✅ Aligns with token-first design system approach
- ✅ Enables runtime density switching without CSS recompilation
- ✅ Provides consistent sizing across all components
- ✅ Better maintainability - change tokens, not component code

**Replace:**
```scss
// ❌ OLD - Hardcoded Material density
@include mat.checkbox-density(-2);
.theme-condensed {
  @include mat.checkbox-density(-4);
}
```

**With:**
```scss
// ✅ NEW - Token-based sizing
body.theme-relaxed,
body:not(.theme-condensed) {
  .component {
    height: var(--base-dimension-dynamic-s11);
    padding: var(--size-spacing-s);
  }
}

body.theme-condensed {
  .component {
    height: var(--base-dimension-dynamic-s11);
    padding: var(--size-spacing-xs);
  }
}
```

### 3. Theme Variable Scope
**Standardize on `html, html .theme-light, html .theme-dark` for CSS custom property definitions**

**Rationale:**
- ✅ Dominant pattern across existing components
- ✅ Ensures proper cascade and inheritance
- ✅ Provides theme-specific token values when needed
- ✅ Works well with global theme structure in `_core.scss`

**Pattern:**
```scss
html,
html .theme-light,
html .theme-dark {
  --mat-component-property: var(--foundation-token);
  --mat-component-size: var(--size-token);
  --mat-component-spacing: var(--size-spacing-token);
}
```

## Standard Component Structure Template

```scss
@use '@angular/material' as mat;
@use '@jeppesen-foreflight/dls-global-assets/dist/scss/base/_compositionMixins.scss' as composition;
@use '@jeppesen-foreflight/dls-global-assets/dist/scss/base/_typographyMixins.scss' as typography;
@use '../m3-theme.scss' as m3;

// =============================================================================
// THEME APPLICATION
// =============================================================================

:root {
  // Apply Material theme (dark by default)
  @include mat.component-theme(m3.$dark-theme);
}

// Apply the light theme only when the user prefers light themes
.theme-light {
  @include mat.component-color(m3.$light-theme);
}

// =============================================================================
// DENSITY-AWARE SIZING (Use body selector with design tokens)
// =============================================================================

body.theme-relaxed,
body:not(.theme-condensed) {
  .component {
    // Token-based sizing, transforms, spacing for relaxed mode
    height: var(--base-dimension-dynamic-s11);
    padding: var(--size-spacing-s);
    transform: translateY(-2px) !important;
  }
}

body.theme-condensed {
  .component {
    // Token-based sizing, transforms, spacing for condensed mode
    height: var(--base-dimension-dynamic-s11);
    padding: var(--size-spacing-xs);
    transform: translateY(-4px) !important;
  }
}

// =============================================================================
// CUSTOM STYLES AND OVERRIDES
// =============================================================================

// Component-specific styles, hover states, interactions, etc.

// =============================================================================
// CSS CUSTOM PROPERTY TOKENS
// =============================================================================

html,
html .theme-light,
html .theme-dark {
  --mat-component-property: var(--foundation-token);
  --mat-component-color: var(--foundation-interactive-primary-textandicon-primary-default);
  --mat-component-size: var(--size-sizing-xl);
  --mat-component-spacing: var(--size-spacing-s);
}
```

## Gold Standard Reference

**The form field components are the gold standard** - all other components should follow this pattern:

### Example: `_form-field.scss` (Lines 20-62)
```scss
// Density-aware form field container height using design tokens
html,
html .theme-relaxed {
  .mat-mdc-form-field {
    --mdc-filled-text-field-container-height: var(--base-dimension-dynamic-s11) !important;
  }

  .mdc-text-field--filled {
    height: var(--base-dimension-dynamic-s11) !important;
  }

  // Icon positioning for relaxed density
  .mat-mdc-form-field-icon-suffix,
  .mat-mdc-form-field-icon-prefix,
  .mat-datepicker-toggle,
  button[matIconButton][matSuffix],
  button[matIconButton][matPrefix] {
    transform: translateY(0px) !important;
  }
}

html .theme-condensed {
  .mat-mdc-form-field {
    --mdc-filled-text-field-container-height: var(--base-dimension-dynamic-s11) !important;
  }

  .mdc-text-field--filled {
    height: var(--base-dimension-dynamic-s11) !important;
  }

  // Icon positioning for condensed density
  .mat-mdc-form-field-icon-suffix,
  .mat-mdc-form-field-icon-prefix,
  .mat-datepicker-toggle,
  button[matIconButton][matSuffix],
  button[matIconButton][matPrefix] {
    transform: translateY(-3px) !important;
  }
}
```

### Example: `_input.scss` (Lines 24-45)
```scss
body.theme-relaxed,
body:not(.theme-condensed) {
  .mdc-text-field {
    input.mat-mdc-input-element,
    .mat-mdc-form-field-text-prefix,
    .mat-mdc-form-field-text-suffix,
    textarea {
      transform: translate(0px, -2px) !important;
    }
  }
}

body.theme-condensed {
  .mdc-text-field {
    input.mat-mdc-input-element,
    .mat-mdc-form-field-text-prefix,
    .mat-mdc-form-field-text-suffix,
    textarea {
      transform: translate(0px, -4px) !important;
    }
  }
}
```

## Storybook Integration

### How Storybook Validates Density
Storybook provides **runtime density switching** via toolbar controls that apply classes to `document.body`:

**From `.storybook/preview.ts` (Lines 22-30):**
```typescript
const withDensityTheme = (story: any, context: any) => {
  const densityTheme = context.globals.densityTheme || 'relaxed';
  
  if (typeof document !== 'undefined') {
    document.body.classList.remove('theme-relaxed', 'theme-condensed');
    document.body.classList.add(`theme-${densityTheme}`);
  }
  
  return story();
};
```

**Key Findings:**
- ✅ Storybook applies `theme-relaxed` / `theme-condensed` to `document.body`
- ✅ This confirms `body.theme-*` selector pattern is correct
- ✅ All component stories inherit global density theme
- ✅ Density toggle toolbar control available on every story

### Storybook Testing Workflow
1. **Build Storybook**: `npm run storybook`
2. **Toggle Density**: Use toolbar control to switch between relaxed/condensed
3. **Visual Verification**: Check all form components respond correctly
4. **Regression Testing**: Verify no visual regressions in either mode

## Key Design Tokens

### Density-Aware Dimensions
- `--base-dimension-dynamic-s11`: Primary density token (48px relaxed → 40px condensed)
- Set globally in `_core.scss` via `theme.theme-relaxed-size()` and `theme.theme-condensed-size()` mixins

### Sizing Tokens
- `--size-sizing-xl`, `--size-sizing-2xl`, etc.: Fixed sizing tokens
- `--size-spacing-xs`, `--size-spacing-s`, etc.: Spacing tokens

### Color Tokens
- `--foundation-interactive-primary-*`: Primary interactive colors
- `--foundation-interactive-accent-*`: Accent colors
- `--foundation-semantic-*`: Semantic colors (error, warning, etc.)

## Related Files

### Core Files
- `/projects/design/dp-dls-global-angular/styles/material/_core.scss` - Global theme and density token setup
- `/projects/design/dp-dls-global-angular/.storybook/preview.ts` - Storybook density decorator

### Gold Standard Components (Reference These)
- `/projects/design/dp-dls-global-angular/styles/material/components/_form-field.scss`
- `/projects/design/dp-dls-global-angular/styles/material/components/_input.scss`
- `/projects/design/dp-dls-global-angular/styles/material/components/_select.scss`

## Notes

- Always test changes in both Storybook and the demo app
- Use browser DevTools to verify computed token values
- Check for specificity issues if styles don't apply
- Document any deviations from the standard pattern with comments

---

**Last Updated**: May 2026
**Status**: ✅ Standardization complete across all components.
