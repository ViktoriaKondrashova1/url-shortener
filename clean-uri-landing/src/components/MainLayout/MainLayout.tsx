import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Flex } from '@chakra-ui/react';

export const MainLayout = () => {
  return (
    <Flex direction='column' minH='100vh'>
      <Header />
      <Flex as='main' flex='1'>
        <Outlet />
      </Flex>
      <Footer />
    </Flex>
  );
};
