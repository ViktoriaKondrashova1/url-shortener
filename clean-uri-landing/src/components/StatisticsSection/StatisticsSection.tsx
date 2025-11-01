import { Heading, Stack, Text, HStack, Icon, Flex } from '@chakra-ui/react';
import { STAT_INFO } from '../../constants/constants';
import './StatisticsSection.scss';

export const StatisticsSection = () => {
  return (
    <Stack justify='center' align='center' className='stats'>
      <Heading size='4xl'>Advanced Statistics</Heading>
      <Text textAlign='center' w='540px'>
        Track how your links are performing across the web with our advanced statistics dashboard
      </Text>
      <HStack className='stats-info' gap={8}>
        {STAT_INFO.map(el => {
          return (
            <Stack key={el.id} className='stats-block' borderRadius='md'>
              <Icon>
                <Flex className='stats-block-icon'>
                  <img src={el.icon} alt={el.title} />
                </Flex>
              </Icon>
              <Heading size='lg'>{el.title}</Heading>
              <Text>{el.desc}</Text>
            </Stack>
          );
        })}
      </HStack>
    </Stack>
  );
};
