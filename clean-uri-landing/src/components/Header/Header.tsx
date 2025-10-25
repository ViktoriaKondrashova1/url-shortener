import { ButtonGroup } from '@chakra-ui/react';
import { APP_LOGO } from '../../constants/constants';
import { AppButton } from '../Button/Button';
import { Logo } from '../Logo/Logo';
import './Header.scss';

export const Header = () => {
  return (
    <header className='header'>
      <Logo text={APP_LOGO} />
      <ButtonGroup size='sm'>
        <AppButton className='login-btn' rounded='full' text='Login' onClick={() => {}} />
        <AppButton rounded='full' text='Sign Up' onClick={() => {}} />
      </ButtonGroup>
    </header>
  );
};
