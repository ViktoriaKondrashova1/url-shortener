import { HStack, Input } from '@chakra-ui/react';
import { AppButton } from '../Button/Button';
import { getShortenedURL } from '../../api/getShortenedURL';
import './InputForm.scss';

export const InputForm = () => {
  const handleButtonClick = async () => {
    const link = 'https://chakra-ui.com/docs/components/menu';
    const result = await getShortenedURL(link);
    console.log(result);
  };

  return (
    <HStack gap={8} borderRadius='md' className='form'>
      <Input placeholder='Shorten a link here...' size='lg' borderRadius='md' bg='white' />
      <AppButton rounded='md' text=' Shorten It!' onClick={handleButtonClick} />
    </HStack>
  );
};
