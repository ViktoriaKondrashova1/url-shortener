import { Alert } from '@chakra-ui/react';
import { FC } from 'react';
import "./ErrorAlert.scss"

interface Props {
  description: string;
}

export const ErrorAlert: FC<Props> = ({ description }) => {
  return (
    <Alert.Root status="error" className='alert'>
      <Alert.Indicator />
      <Alert.Content>
        <Alert.Description>{description}</Alert.Description>
      </Alert.Content>
    </Alert.Root>
  );
};
