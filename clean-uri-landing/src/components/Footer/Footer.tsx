import { Flex, Listbox } from '@chakra-ui/react';
import { Logo } from '../Logo/Logo';
import { APP_LOGO, FOOTER_LINKS } from '../../constants/constants';
import "./Footer.scss"

export const Footer = () => {
  return (
    <Flex>
      <Logo text={APP_LOGO} />
      {FOOTER_LINKS.items.map(el => {
        return (
          <Listbox.Root collection={FOOTER_LINKS} key={el.id} width='150px' className='footer-links'>
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
  );
};
