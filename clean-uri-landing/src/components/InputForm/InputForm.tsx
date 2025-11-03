import { HStack, Input } from '@chakra-ui/react';
import { AppButton } from '../Button/Button';
import { getShortenedURL } from '../../api/getShortenedURL';
import { ChangeEvent, useState } from 'react';
import { useLinks } from '../../hooks/useLinks';
import './InputForm.scss';

export const InputForm = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const { addLink } = useLinks();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = async () => {
    const link = inputValue.trim();
    if (!link) return;
    const result = await getShortenedURL(link);
    if (result) {
      addLink(link, result);
    }
    setInputValue('');
  };

  return (
    <HStack gap={8} borderRadius='md' className='form'>
      <Input
        placeholder='Shorten a link here...'
        size='lg'
        borderRadius='md'
        bg='white'
        value={inputValue}
        onChange={e => handleInputChange(e)}
      />
      <AppButton rounded='md' text=' Shorten It!' onClick={handleButtonClick} />
    </HStack>
  );
};
