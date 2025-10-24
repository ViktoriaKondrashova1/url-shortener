import { Heading } from '@chakra-ui/react';
import { FC } from 'react';

interface LogoProps {
  text: string;
}

export const Logo: FC<LogoProps> = ({ text }) => {
  return <Heading size='5xl' fontWeight="bold">{text}</Heading>;
};
