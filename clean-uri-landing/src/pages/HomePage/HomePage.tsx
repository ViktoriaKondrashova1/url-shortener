import { InputSection } from '../../components/InputSection/InputSection';
import { HeroSection } from '../../components/HeroSection/HeroSection';
import { Flex } from '@chakra-ui/react';
import { StatisticsSection } from '../../components/StatisticsSection/StatisticsSection';

const HomePage = () => {
  return (
    <Flex direction='column' w="100%">
      <HeroSection />
      <InputSection />
      <StatisticsSection />
    </Flex>
  );
};

export default HomePage;
