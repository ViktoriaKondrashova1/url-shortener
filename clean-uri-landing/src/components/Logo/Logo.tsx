import { Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { FC } from 'react';
import { ROUTES } from '../../constants/constants';

interface LogoProps {
  text: string;
}

export const Logo: FC<LogoProps> = ({ text }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate(ROUTES.main);
  };

  return (
    <Heading size='5xl' fontWeight='bold' onClick={handleLogoClick} cursor='pointer'>
      {text}
    </Heading>
  );
};
