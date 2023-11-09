import { createBrowserRouter } from 'react-router-dom';

import { PagePath } from '@common';
import { PageOutlet, HomePage, SignInPage, SignUpPage } from '@page';

export const router = createBrowserRouter([
  {
    element: <PageOutlet />,
    children: [
      {
        path: PagePath.Home,
        element: <HomePage />,
      },
      {
        path: PagePath.SignIn,
        element: <SignInPage />,
      },
      {
        path: PagePath.SignUp,
        element: <SignUpPage />,
      },
    ],
  },
]);
