import { createListCollection } from '@chakra-ui/react';

export const APP_LOGO = 'Shortly';

export const MENU_ITEMS = [
  {
    id: 1,
    name: 'Features',
  },
  {
    id: 2,
    name: 'Pricing',
  },
  {
    id: 3,
    name: 'Resources',
  },
];

export const ROUTES = {
  main: '/',
};

export const FOOTER_LINKS = createListCollection({
  items: [
    {
      id: 1,
      name: 'Features',
      subLinks: [
        { label: 'Link Shortening', value: 'Link Shortening' },
        { label: 'Branded Links', value: 'Branded Links' },
        { label: 'Analytics', value: 'Analytics' },
      ],
    },
    {
      id: 2,
      name: 'Pricing',
      subLinks: [
        { label: 'Blog', value: 'Blog' },
        { label: 'Developers', value: 'Developers' },
        { label: 'Support', value: 'Support' },
      ],
    },
    {
      id: 3,
      name: 'Resources',
      subLinks: [
        { label: 'About', value: 'About' },
        { label: 'Our Team', value: 'Our Team' },
        { label: 'Careers', value: 'Careers' },
        { label: 'Contact', value: 'Contact' },
      ],
    },
  ],
});
