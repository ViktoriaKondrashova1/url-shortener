import { Heading, Flex, Text } from '@chakra-ui/react';
import "./StatisticsSection.scss"

export const StatisticsSection = () => {
  return (
    <Flex direction='column' justify="center" align="center" className='statistics'>
      <Heading size="4xl">Advanced Statistics</Heading>
      <Text>Track how your links are performing across the web with our advanced statistics dashboard</Text>
    </Flex>
  );
};
