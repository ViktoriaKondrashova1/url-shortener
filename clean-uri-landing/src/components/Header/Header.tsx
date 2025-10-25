import { ButtonGroup, HStack, Link, Flex, Spacer } from '@chakra-ui/react';
import { APP_LOGO, MENU_ITEMS } from '../../constants/constants';
import { AppButton } from '../Button/Button';
import { Logo } from '../Logo/Logo';
import './Header.scss';

export const Header = () => {
  return (
    <Flex className='header'>
      <Flex gap="16">
        <Logo text={APP_LOGO} />
        <HStack as='nav' gap={8} className='header-menu'>
          {MENU_ITEMS.map(el => (
            <Link key={el.id} href={el.href}>
              {el.text}
            </Link>
          ))}
        </HStack>
      </Flex>
      <Spacer />
      <ButtonGroup size='sm'>
        <AppButton className='login-btn' rounded='full' text='Login' onClick={() => {}} />
        <AppButton rounded='full' text='Sign Up' onClick={() => {}} />
      </ButtonGroup>
    </Flex>
  );
};
