import { InputForm } from '../InputForm/InputForm';
import { Stack } from '@chakra-ui/react';
import { LinksBlock } from '../LinksBlock/LinksBlock';
import './InputSection.scss';

export const InputSection = () => {  
  return (
    <Stack className='input-section'>
      <InputForm />
      <LinksBlock />
    </Stack>
  );
};
