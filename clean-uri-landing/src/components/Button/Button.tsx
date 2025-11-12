import { FC } from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';
import "./Button.scss"

interface Props extends ButtonProps {
  text: string;
  onClick?: () => void;
  to?: string;
}

export const AppButton: FC<Props> = ({ text, onClick, ...rest }) => {
  return (
    <Button className="button" {...rest} onClick={onClick}>
      {text}
    </Button>
  );
};
