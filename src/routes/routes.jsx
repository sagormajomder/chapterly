import { createBrowserRouter } from 'react-router';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home';
import Error from './../pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    errorElement: <Error />,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);

export default router;
