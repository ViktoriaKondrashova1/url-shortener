import { InputForm } from '../InputForm/InputForm';
import { Stack } from '@chakra-ui/react';
import { LinksBlock } from '../LinksBlock/LinksBlock';
import './InputSection.scss';

export const InputSection = () => {
  const links = [
    {
      id: 1,
      originalLink:
        'https://chatgpt.com/c/68fb61fa-6a94-8327-a383-667693874134764545342422434343555555555555555555555555555555555555',
      shortenedLink: 'https://reLink/gop3X9',
    },
    {
      id: 2,
      originalLink: 'https://chatgpt.com/c/68fb61fa-6a94-8327-a383-667693874134',
      shortenedLink: 'https://reLink/gop3X9',
    },
    {
      id: 3,
      originalLink: 'https://chatgpt.com/c/68fb61fa-6a94-8327-a383-667693874134',
      shortenedLink: 'https://reLink/gop3X9',
    },
  ];

  return (
    <Stack className='input-section'>
      <InputForm />
      <LinksBlock links={links} />
    </Stack>
  );
};
