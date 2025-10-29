import { HStack, Input } from '@chakra-ui/react';
import { AppButton } from '../Button/Button';
import "./InputForm.scss"

export const InputForm = () => {
  return (
    <HStack gap={8} borderRadius='md' className='form'>
      <Input placeholder='Shorten a link here...' size='lg' borderRadius='md' bg='white' />
      <AppButton rounded="md" text=' Shorten It!' onClick={() => {}} />
    </HStack>
  );
};
