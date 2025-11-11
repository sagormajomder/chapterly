import axios from 'axios';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../layouts/RootLayout';
import BookDetailsPage from '../pages/BookDetailsPage';
import ErrorPage from '../pages/ErrorPage';
import AddBookPage from './../pages/AddBookPage';
import AllBookPage from './../pages/AllBookPage';
import Homepage from './../pages/Homepage';
import LoginPage from './../pages/LoginPage';
import MyBookPage from './../pages/MyBookPage';
import RegistrationPage from './../pages/RegistrationPage';
import ProtectedRoute from './ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Homepage,
      },
      {
        path: 'all-books',
        Component: AllBookPage,
        loader: async () => axios.get('http://localhost:3000/all-books'),
      },
      {
        path: 'book-details/:id',
        element: (
          <ProtectedRoute>
            <BookDetailsPage />
          </ProtectedRoute>
        ),
      },

      {
        path: 'add-book',
        element: (
          <ProtectedRoute>
            <AddBookPage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'my-books',
        element: (
          <ProtectedRoute>
            <MyBookPage />
          </ProtectedRoute>
        ),
      },

      // Auth
      {
        path: 'auth/register',
        element: <RegistrationPage />,
      },
      {
        path: 'auth/login',
        element: <LoginPage />,
      },
      // Error
      {
        path: '*',
        Component: ErrorPage,
      },
    ],
  },
]);

export default router;
