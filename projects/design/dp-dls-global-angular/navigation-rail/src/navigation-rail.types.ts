/**
 * An interface for an individual menu item to be presented in the `Navigation
 * Drawer` sidebar component.
 * 
 * A given item may be discrete or may contain children. Any attached children 
 * also adhere to this interface.
 */
export type AtmosphereNavRailMenuItem = {
  label: string,
  icon?: string,
  route?: string,
  toggled?: boolean,
  children?: AtmosphereNavRailMenuItem[],
}


