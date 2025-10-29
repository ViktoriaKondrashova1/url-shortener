import { Container, Heading, Text, Flex } from '@chakra-ui/react';
import { AppButton } from '../Button/Button';
import './HeroSection.scss';

export const HeroSection = () => {
  return (
    <Container className='hero'>
      <Flex direction="column" className='hero-content'>
        <Heading size="6xl">More than just shorter links</Heading>
        <Text>
          Build your brand's recognition and get detailed insights on how your links are performing.
        </Text>
        <AppButton rounded="full" text="Get Started" onClick={() => {}} />
      </Flex>
    </Container>
  );
};
