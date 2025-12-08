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

## Implementation Action Plan

### Phase 1 - Critical Components (Do First)

#### 1. Update `_checkbox.scss`
**Changes Needed:**
- Replace `html .theme-condensed` → `body.theme-condensed`
- Replace `html .theme-relaxed` → `body.theme-relaxed`
- Remove `@include mat.checkbox-density(-2)` and `(0)`
- Implement token-based sizing

**Current Issues (Lines 31-40):**
```scss
// ❌ Uses html prefix and hardcoded density
html .theme-condensed {
  .mat-mdc-checkbox {
    @include mat.checkbox-density(-2);
  }
}

html .theme-relaxed {
  .mat-mdc-checkbox {
    @include mat.checkbox-density(0);
  }
}
```

**Should Be:**
```scss
// ✅ Uses body prefix and design tokens
body.theme-condensed {
  .mat-mdc-checkbox {
    // Token-based sizing instead of density mixin
    height: var(--size-sizing-4xl);
    width: var(--size-sizing-4xl);
  }
}

body.theme-relaxed,
body:not(.theme-condensed) {
  .mat-mdc-checkbox {
    // Token-based sizing instead of density mixin
    height: var(--size-sizing-5xl);
    width: var(--size-sizing-5xl);
  }
}
```

#### 2. Update `_datepicker.scss`
**Changes Needed:**
- Replace `.theme-condensed` → `body.theme-condensed`
- Add `body.theme-relaxed` section
- Remove `@include mat.datepicker-density(-2)` and `(-4)`
- Implement token-based sizing

**Current Issues (Lines 23-27):**
```scss
// ❌ Hardcoded Material density mixins
@include mat.datepicker-density(-2);

.theme-condensed {
  @include mat.datepicker-density(-4);
}
```

**Should Be:**
```scss
// ✅ Design token-based density
body.theme-relaxed,
body:not(.theme-condensed) {
  // Datepicker inherits form-field container height
  // Additional datepicker-specific sizing if needed
}

body.theme-condensed {
  // Datepicker inherits form-field container height
  // Additional datepicker-specific sizing if needed
}
```

#### 3. Update `_radio.scss`
**Changes Needed:**
- Replace `html .theme-condensed` → `body.theme-condensed`
- Add `body.theme-relaxed` section for consistency
- Already uses tokens, just needs selector update

**Current Issues (Lines 36-72):**
```scss
// ❌ Uses html prefix (but already has token-based sizing ✓)
html .theme-condensed {
  .mat-mdc-radio-touch-target {
    height: var(--size-sizing-4xl);
    width: var(--size-sizing-4xl);
  }
  // ... more token-based styles
}
```

**Should Be:**
```scss
// ✅ Uses body prefix with existing token-based sizing
body.theme-relaxed,
body:not(.theme-condensed) {
  .mat-mdc-radio-touch-target {
    height: var(--size-sizing-5xl);
    width: var(--size-sizing-5xl);
  }
}

body.theme-condensed {
  .mat-mdc-radio-touch-target {
    height: var(--size-sizing-4xl);
    width: var(--size-sizing-4xl);
  }
  // ... more token-based styles
}
```

### Phase 2 - Standardization of Remaining Components

Review and standardize all components with density handling:
- `_list.scss` - Has `.theme-condensed` usage
- `_menu.scss` - Has `html .theme-condensed` usage
- `_table.scss` - Has `html .theme-relaxed` and `html .theme-condensed` usage
- `_tooltip.scss` - Has `html .theme-condensed` usage
- `_dialog.scss` - Has `html .theme-condensed` usage
- `_toolbar.scss` - Has `html.theme-condensed` and `.theme-condensed` usage
- `_card.scss` - Has `html .theme-condensed` usage
- `_chips.scss` - Has `body.theme-relaxed` and `.theme-relaxed` (inconsistent)

### Phase 3 - Validation

1. **Test Density Toggle Functionality**
   - Run demo app and toggle density
   - Verify all components respond correctly
   - Check for layout issues

2. **Storybook Validation**
   - Build and run Storybook
   - Toggle density toolbar control
   - Review all component stories in both modes

3. **Visual Regression Testing**
   - Capture screenshots of components in both densities
   - Compare before/after changes
   - Document any intentional visual changes

4. **Token Value Verification**
   - Confirm `--base-dimension-dynamic-s11` correctly switches between 56px (relaxed) and 48px (condensed)
   - Verify token cascade from `_core.scss`
   - Check computed styles in browser DevTools

## Key Design Tokens

### Density-Aware Dimensions
- `--base-dimension-dynamic-s11`: Primary density token (56px relaxed → 48px condensed)
- Set globally in `_core.scss` via `theme.theme-relaxed-size()` and `theme.theme-condensed-size()` mixins

### Sizing Tokens
- `--size-sizing-xl`, `--size-sizing-2xl`, etc.: Fixed sizing tokens
- `--size-spacing-xs`, `--size-spacing-s`, etc.: Spacing tokens

### Color Tokens
- `--foundation-interactive-primary-*`: Primary interactive colors
- `--foundation-interactive-accent-*`: Accent colors
- `--foundation-semantic-*`: Semantic colors (error, warning, etc.)

## Benefits of Standardization

### Maintainability
- One pattern to learn across all components
- Easier onboarding for new developers
- Consistent code structure

### Scalability
- Adding new components follows clear template
- Token changes apply globally
- No need to update individual component density values

### Flexibility
- Runtime density switching without CSS rebuilds
- Theme and density are independent concerns
- Easy to add new density modes in the future

### Performance
- Smaller bundle size (tokens vs hardcoded mixins)
- CSS custom properties are efficient
- No duplicate density code

### User Experience
- Consistent density behavior across all components
- Predictable spacing and sizing
- Smooth transitions between density modes

## Related Files

### Core Files
- `/projects/design/dp-dls-global-angular/styles/material/_core.scss` - Global theme and density token setup
- `/projects/design/dp-dls-global-angular/.storybook/preview.ts` - Storybook density decorator

### Gold Standard Components (Reference These)
- `/projects/design/dp-dls-global-angular/styles/material/components/_form-field.scss`
- `/projects/design/dp-dls-global-angular/styles/material/components/_input.scss`
- `/projects/design/dp-dls-global-angular/styles/material/components/_select.scss`

### Components Requiring Updates
- `/projects/design/dp-dls-global-angular/styles/material/components/_checkbox.scss`
- `/projects/design/dp-dls-global-angular/styles/material/components/_datepicker.scss`
- `/projects/design/dp-dls-global-angular/styles/material/components/_radio.scss`
- `/projects/design/dp-dls-global-angular/styles/material/components/_list.scss`
- `/projects/design/dp-dls-global-angular/styles/material/components/_menu.scss`
- `/projects/design/dp-dls-global-angular/styles/material/components/_table.scss`
- `/projects/design/dp-dls-global-angular/styles/material/components/_tooltip.scss`
- `/projects/design/dp-dls-global-angular/styles/material/components/_dialog.scss`
- `/projects/design/dp-dls-global-angular/styles/material/components/_toolbar.scss`
- `/projects/design/dp-dls-global-angular/styles/material/components/_card.scss`
- `/projects/design/dp-dls-global-angular/styles/material/components/_chips.scss`

## Notes

- Always test changes in both Storybook and the demo app
- Use browser DevTools to verify computed token values
- Check for specificity issues if styles don't apply
- Document any deviations from the standard pattern with comments
- Consider adding density-specific stories to showcase differences

---

**Last Updated**: December 8, 2025
**Branch**: `fix/dropdown`
**Status**: Form field components (form-field, input, select) updated to standard. Other components pending.
