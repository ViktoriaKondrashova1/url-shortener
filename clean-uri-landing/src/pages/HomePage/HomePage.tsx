import { InputSection } from '../../components/InputSection/InputSection';
import { HeroSection } from '../../components/HeroSection/HeroSection';
import { Flex } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Flex direction='column' w="100%">
      <HeroSection />
      <InputSection />
    </Flex>
  );
};

export default HomePage;
