export const MockSidebarMenuData = [
  { 
    sectionHeader: "Section Header Label 1",
    sectionIcon: "apps",
    sectionIconAriaText: "Example icon-button with a bookmark icon",
    sectionMenuItems: [
      {
        label: 'Level 1 destination',
        icon: 'book',
        
        count: '99+',
        toggled: false,
        children: [
          { label: 'Level 2 destination', icon: 'chat',  count: '99+', toggled: false },
          { label: 'Level 2 destination', icon: 'download',  count: '99+', toggled: false },
        ],
        expanded: false,
      },
      {
        label: 'Level 1 destination',
        icon: 'palette',
        route: '/level1',
        count: '99+',
        expanded: false,
        toggled: false
      },
      {
        label: 'Level 1 destination',
        icon: 'add-circle',
        route: '/level1',
        count: '99+',
        expanded: false,
        toggled: false
      },
    ]
  },
  { 
    sectionHeader: "Section Header Label 2",
    sectionIcon: "code",
    sectionIconAriaText: "Example icon-button with a bookmark icon",
    sectionMenuItems: [
      {
        label: 'Level 1 destination',
        icon: 'tune',
        route: '/level1',
        count: '99+',
        expanded: false,
        toggled: false
      },
      {
        label: 'Level 1 destination',
        icon: 'support',
        route: '/level1',
        count: '99+',
        expanded: false,
        toggled: false
      },
    ]
  }
];