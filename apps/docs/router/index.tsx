export const LRC_UI_ROUTES = [
  {
    path: '/',
    name: 'Home',
  },
  {
    name: '内容组件',
    children: [
      { path: '/text', name: 'Text' },
      { path: '/heading', name: 'Heading' },
      { path: '/tag', name: 'Tag' },
    ],
  },
  {
    name: '通用组件',
    children: [
      {
        path: '/button',
        name: 'Button',
      },
    ],
  },
];
