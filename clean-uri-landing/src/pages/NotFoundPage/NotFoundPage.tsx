import { Box, Heading, Text, VStack, Container } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { AppButton } from '../../components/Button/Button';
import './NotFoundPage.scss';

const NotFoundPage = () => {
  return (
    <Container className='not-found'>
      <VStack gap={6} textAlign='center'>
        <Box className='not-found-404' bg='gray.100' mb={4}>
          <Text fontSize='6xl' fontWeight='bold' color='gray.400'>
            404
          </Text>
        </Box>
        <Heading as='h1' size='2xl' mb={4}>
          Page not found
        </Heading>
        <Text fontSize='xl' color='gray.500' maxW='md'>
          We're sorry, but the page you are looking for cannot be found.
        </Text>
        <AppButton as={RouterLink} to='/' text='Home page' />
      </VStack>
    </Container>
  );
};

export default NotFoundPage;
