import { createListCollection } from '@chakra-ui/react';
import brandRecognitionIcon from '../assets/icon-brand-recognition.svg';
import detailedRecordsIcon from '../assets/icon-detailed-records.svg';
import fullyCustomIcon from '../assets/icon-fully-customizable.svg';

export const API_URL = '/api/shorten';

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

export const STAT_INFO = [
  {
    id: 1,
    icon: brandRecognitionIcon,
    title: 'Brand Recognition',
    desc: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
  },
  {
    id: 2,
    icon: detailedRecordsIcon,
    title: 'Detailed Records',
    desc: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
  },
  {
    id: 3,
    icon: fullyCustomIcon,
    title: 'Fully Customizable',
    desc: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
  },
];

export const STORAGE_KEY = 'shortened_links';
