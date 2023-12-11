import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@layout';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [],
  },
]);
