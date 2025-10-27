import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '../constants/constants';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: ROUTES.main,
        element: <HomePage />,
        index: true,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
