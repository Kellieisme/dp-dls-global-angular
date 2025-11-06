import { AtmosphereNavRailMenuItem } from './navigation-rail.types'

export const MockSideRailMenuData: AtmosphereNavRailMenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'apps',
      route: '/level1',
      toggled: false,
    },
    {
      label: 'Button 1',
      icon: 'code',
      route: '/level1',
      toggled: false
    },
    {
      label: 'Doesnotfit',
      icon: 'book',
      route: '/level1',
      toggled: false
    },
  ];
