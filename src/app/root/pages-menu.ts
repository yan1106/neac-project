import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: '統計圖表',
    icon: 'pie-chart-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: '課程管理',
    icon: 'grid-outline',
    children: [
      {
        title: 'BANNER列表(最新消息)',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Tree Grid',
        link: '/pages/tables/tree-grid',
      },
    ],
  },
];
