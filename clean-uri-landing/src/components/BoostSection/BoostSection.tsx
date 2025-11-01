import { Stack, Heading } from '@chakra-ui/react';
import { AppButton } from '../Button/Button';
import './BoostSection.scss';

export const BoostSection = () => {
  return (
    <Stack className='boost'>
      <Heading size='4xl'>Boost your links today</Heading>
      <AppButton rounded="full" text='Get Started' size="lg" onClick={() => {}} />
    </Stack>
  );
};
