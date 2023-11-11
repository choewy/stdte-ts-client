import { createBrowserRouter } from 'react-router-dom';

import { PagePath } from '@common';
import { Layout } from '@layout';
import { HomePage, MyPage, SignInPage, SignOutPage, SignUpPage } from '@page';

export const router = createBrowserRouter([
  {
    element: <Layout />,
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
      {
        path: PagePath.SignOut,
        element: <SignOutPage />,
      },
      {
        path: PagePath.MyPage,
        element: <MyPage />,
      },
    ],
  },
]);
