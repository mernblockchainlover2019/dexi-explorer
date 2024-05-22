import {
  AffiliateIcon,
  ApiManagementIcon,
  DocsIcon,
  WidgetIcon,
} from 'components/icons';
import { LinkTypes, MenuTypes } from './Navbar.type';

export const links: Array<LinkTypes | MenuTypes> = [
  {
    location: '/',
    title: 'Home',
    id: 1,
    type: 'link',
    openInNewTab: false,
  },
  {
    location: '/statistics',
    title: 'Statistics',
    id: 2,
    type: 'link',
    openInNewTab: false,
  },
  {
    location: '/transactions',
    title: 'Transactions',
    id: 3,
    type: 'link',
    openInNewTab: false,
  },
  {
    title: 'Resources',
    type: 'menu',
    id: 4,
    subMenu: [
      {
        title: 'API/SDK',
        location: '#',
        openInNewTab: true,
        icon: ApiManagementIcon,
      },
      {
        title: 'Widget',
        location: '#',
        openInNewTab: true,
        icon: WidgetIcon,
      },
      {
        title: 'Affiliate',
        location: '#',
        openInNewTab: true,
        icon: AffiliateIcon,
      },
      {
        title: 'Docs',
        location: '#',
        openInNewTab: true,
        icon: DocsIcon,
      },
    ],
  },
];
