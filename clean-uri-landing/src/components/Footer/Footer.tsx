import { Flex, HStack, IconButton, Listbox } from '@chakra-ui/react';
import { Logo } from '../Logo/Logo';
import { APP_LOGO, FOOTER_LINKS } from '../../constants/constants';
import twitterLogo from '../../assets/icons/icon-twitter.svg';
import facebookLogo from '../../assets/icons/icon-facebook.svg';
import instaLogo from '../../assets/icons/icon-instagram.svg';
import pinterestLogo from '../../assets/icons/icon-pinterest.svg';
import './Footer.scss';

export const Footer = () => {
  const footerMediaList = [
    { id: 'twitter', href: 'https://x.com/', icon: twitterLogo },
    { id: 'facebook', href: 'https://www.facebook.com/', icon: facebookLogo },
    { id: 'instagram', href: 'http://instagram.com/', icon: instaLogo },
    { id: 'pinteres', href: 'https://www.pinterest.com/', icon: pinterestLogo },
  ];

  return (
    <Flex className='footer'>
      <Logo text={APP_LOGO} />
      <Flex>
        {FOOTER_LINKS.items.map(el => {
          return (
            <Listbox.Root
              collection={FOOTER_LINKS}
              key={el.id}
              width='150px'
              className='footer-links'
            >
              <Listbox.Label>{el.name}</Listbox.Label>
              <Listbox.Content>
                {el.subLinks.map(link => (
                  <Listbox.Item item={link} key={link.value}>
                    <Listbox.ItemText>{link.label}</Listbox.ItemText>
                    <Listbox.ItemIndicator />
                  </Listbox.Item>
                ))}
              </Listbox.Content>
            </Listbox.Root>
          );
        })}
      </Flex>
      <HStack align='flex-start'>
        {footerMediaList.map(el => {
          return (
            <IconButton
              key={el.id}
              aria-label={el.id}
              variant='ghost'
              rounded='full'
              className='footer-media-btn'
            >
              <img src={el.icon} alt={el.id} />
            </IconButton>
          );
        })}
      </HStack>
    </Flex>
  );
};
