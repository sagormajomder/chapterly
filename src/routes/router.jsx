import { createBrowserRouter } from 'react-router';
import Loader from '../components/Loader';
import { customAxios } from '../helpers/helpers';
import RootLayout from '../layouts/RootLayout';
import BookDetailsPage from '../pages/BookDetailsPage';
import ErrorPage from '../pages/ErrorPage';
import UpdateBookPage from '../pages/UpdateBookPage';
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
    hydrateFallbackElement: <Loader />,
    children: [
      {
        index: true,
        Component: Homepage,
        loader: async () => customAxios().get('/latest-books'),
      },
      {
        path: 'all-books',
        Component: AllBookPage,
        loader: async () => customAxios().get('/all-books'),
      },
      {
        path: 'book-details/:id',
        element: (
          <ProtectedRoute>
            <BookDetailsPage />
          </ProtectedRoute>
        ),
        loader: async () => customAxios().get('/all-books'),
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
      {
        path: 'update-book/:id',
        element: (
          <ProtectedRoute>
            <UpdateBookPage />
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
