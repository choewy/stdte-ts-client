import { Navigate, createBrowserRouter } from 'react-router-dom';

import { Layout } from '@layout';
import { PagePath } from '@common';
import {
  AllowGuestOnlyGuardPage,
  AllowUserOnlyGuardPage,
  EmptyPage,
  HomeIframePage,
  HomePage,
  SignInPage,
  SignOutPage,
  SignUpPage,
} from '@page';

export const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        {
          path: PagePath.Home,
          element: <HomePage />,
        },
        {
          path: PagePath.HomeIframe,
          element: <HomeIframePage />,
        },
        {
          element: <AllowGuestOnlyGuardPage />,
          children: [
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
        {
          element: <AllowUserOnlyGuardPage />,
          children: [
            {
              path: PagePath.SignOut,
              element: <SignOutPage />,
            },
            {
              path: PagePath.MyPage,
              element: <EmptyPage title="마이페이지" />,
            },
            {
              path: PagePath.Admin,
              element: <Navigate to={PagePath.AdminRole} />,
            },
            {
              path: PagePath.AdminRole,
              element: <EmptyPage title="관리자 역할관리" />,
            },
            {
              path: PagePath.AdminCredentials,
              element: <EmptyPage title="관리자 계정관리" />,
            },
            {
              path: PagePath.Time,
              element: <Navigate to={PagePath.TimeRecord} />,
            },
            {
              path: PagePath.TimeRecord,
              element: <EmptyPage title="시간관리 내 기록으로 Redirect" />,
            },
            {
              path: PagePath.TimeRecordByUser,
              element: <EmptyPage title="시간관리 내 기록 또는 누군가의 기록" />,
            },
            {
              path: PagePath.TimeAnalysis,
              element: <EmptyPage title="시간관리 통계" />,
            },
            {
              path: PagePath.User,
              element: <EmptyPage title="구성원 목록" />,
            },
            {
              path: PagePath.Project,
              element: <EmptyPage title="프로젝트 목록" />,
            },
            {
              path: PagePath.ProjectCustomer,
              element: <EmptyPage title="프로젝트 고객사 목록" />,
            },
            {
              path: PagePath.ProjectCategory,
              element: <Navigate to={PagePath.ProjectBusinessCategory} />,
            },
            {
              path: PagePath.ProjectBusinessCategory,
              element: <EmptyPage title="프로젝트 사업구분" />,
            },
            {
              path: PagePath.ProjectIndustryCategory,
              element: <EmptyPage title="프로젝트 산업분야" />,
            },
            {
              path: PagePath.ProjectTaskCategory,
              element: <EmptyPage title="프로젝트 수행업무" />,
            },
            {
              path: PagePath.Setting,
              element: <EmptyPage title="설정" />,
            },
          ],
        },
      ],
    },
  ],
  { basename: process.env.PUBLIC_URL },
);
