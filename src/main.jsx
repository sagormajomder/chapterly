import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router';
const router = createBrowserRouter([
  {
    path: '/',
    element: <h1 className='text-4xl bg-red-500'> Hello World</h1>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />;
  </StrictMode>
);
