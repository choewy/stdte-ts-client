import { createBrowserRouter } from 'react-router-dom';

import { PagePath } from '@common';
import { Layout } from '@layout';
import {
  CredentialPage,
  ForbiddenPage,
  HomePage,
  MyPage,
  ProjectSettingPage,
  ProjectTablePage,
  RolePage,
  SignInPage,
  SignOutPage,
  SignUpPage,
  TeamPage,
  MemberPage,
  TimeRecordAnalyticsPage,
  TimeRecordTablePage,
  RedirectPage,
  LogPage,
} from '@page';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: PagePath.Home,
        element: <HomePage />,
      },
      {
        path: PagePath.Forbidden,
        element: <ForbiddenPage />,
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
      {
        path: PagePath.Role,
        element: <RolePage />,
      },
      {
        path: PagePath.Credential,
        element: <CredentialPage />,
      },
      {
        path: PagePath.TimeRecordTable,
        element: <TimeRecordTablePage />,
      },
      {
        path: PagePath.TimeRecordAnalytics,
        element: <TimeRecordAnalyticsPage />,
      },
      {
        path: PagePath.Team,
        element: <TeamPage />,
      },
      {
        path: PagePath.Member,
        element: <MemberPage />,
      },
      {
        path: PagePath.ProjectTable,
        element: <ProjectTablePage />,
      },
      {
        path: PagePath.ProjectSetting,
        element: <ProjectSettingPage />,
      },
      {
        path: PagePath.Log,
        element: <LogPage />,
      },
      {
        path: '*',
        element: <RedirectPage />,
      },
    ],
  },
]);
