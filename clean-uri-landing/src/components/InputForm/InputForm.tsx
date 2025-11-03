import { Field, HStack, Input } from '@chakra-ui/react';
import { AppButton } from '../Button/Button';
import { getShortenedURL } from '../../api/getShortenedURL';
import { ChangeEvent, useState, useRef, useEffect } from 'react';
import { useLinks } from '../../hooks/useLinks';
import { ErrorAlert } from '../ErrorAlert/ErrorAlert';
import './InputForm.scss';

export const InputForm = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [error, setError] = useState<string>('');
  const { addLink } = useLinks();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (error && inputRef.current) {
      inputRef.current.focus();
    }
  }, [error]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setError('');
  };

  const handleButtonClick = async () => {
    const link = inputValue.trim();

    if (!link) {
      setError('Please add a link');
      return;
    }

    try {
      const result = await getShortenedURL(link);
      addLink(link, result);
      setInputValue('');
      setError('');
    } catch {
      setError('Invalid link');
    }
  };

  return (
    <HStack gap={8} borderRadius='md' className='form'>
      <Field.Root>
        <Input
          ref={inputRef}
          placeholder='Shorten a link here...'
          size='lg'
          borderRadius='md'
          bg='white'
          value={inputValue}
          onChange={e => handleInputChange(e)}
          _focus={{
            outline: error ? '2px solid token(colors.appRed)' : '2px solid token(colors.blue)',
          }}
        />
        {error && <ErrorAlert description={error} />}
      </Field.Root>
      <AppButton rounded='md' text=' Shorten It!' onClick={handleButtonClick} />
    </HStack>
  );
};
