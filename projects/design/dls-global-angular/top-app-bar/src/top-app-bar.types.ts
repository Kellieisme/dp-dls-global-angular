/**
 * An individual top-level navigation item consisting of a string label and its
 * associated route.
 */
export type AtmosphereTopBarNavigationLink = {
  label: string;
  path: string;
};
  
/**
 * An array of navigation links representing a complete top-level navigation
 * menu.
 * 
 * UPDATE: MARCH 25 - this is obsolete. The top app bar no longer has these elements.
 */
export type AtmosphereTopBarNavigationLinkArray = AtmosphereTopBarNavigationLink[];
  