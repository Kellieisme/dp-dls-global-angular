/**
 * A union of strings detailing the acceptable presentation variants for the
 * Nav Drawer. Internally in the component class, these are validated against
 * the enum NavDrawerPresentationEnum's string values.
 */
export type AtmosphereNavDrawerVariant = (
  'default' |
  'standalone' |
  'modal'
)

/**
 * An interface for an individual menu item to be presented in the `Navigation
 * Drawer` sidebar component.
 * 
 * A given item may be discrete or may contain children. Any attached children 
 * also adhere to this interface.
 */
export type AtmosphereNavDrawerMenuItem = {
  label: string,
  icon?: string,
  route?: string,
  count?: string,
  toggled?: boolean,
  expanded?: boolean,
  children?: AtmosphereNavDrawerMenuItem[],
}

/**
 * A collection of menu items, organized into a section, to be presented in the
 * `Navigation Drawer` sidebar component. The component may have multiple
 * sections, and each section multiple menu items.
 */
export type AtmosphereNavDrawerMenuSection = {
  sectionHeader?: string,
  sectionIcon?: string,
  sectionIconAriaText?: string,
  sectionMenuItems?: AtmosphereNavDrawerMenuItem[],
}

/**
 * An array of menu sections representing a complete navigation hierarchy for 
 * use in Atmosphere's `Navigation Drawer` sidebar component.
 */
export type AtmosphereNavDrawerMenu = AtmosphereNavDrawerMenuSection[];

