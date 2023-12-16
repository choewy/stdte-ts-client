import { Navigate, createBrowserRouter } from 'react-router-dom';

import { PagePath } from '@common';
import { Layout } from '@layout';
import {
  AllowGuestOnlyGuardPage,
  AllowUserOnlyGuardPage,
  AllowBlockOnlyGuardPage,
  EmptyPage,
  HomePage,
  NotFoundPage,
  SignInPage,
  SignUpPage,
  SignOutPage,
  MyPage,
  RolePage,
  CredentialsPage,
  UserPage,
  BusinessCategoryPage,
  IndustryCategoryPage,
  TaskCategoryPage,
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
          element: <AllowBlockOnlyGuardPage />,
          children: [
            {
              path: PagePath.Wating,
              element: <div>가입 승인 대기중</div>,
            },
            {
              path: PagePath.Rejected,
              element: <div>가입 승인 거절됨</div>,
            },
            {
              path: PagePath.Disabled,
              element: <div>계정 비활성 상태</div>,
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
              element: <MyPage />,
            },
            {
              path: PagePath.Admin,
              element: <Navigate to={PagePath.AdminRole} />,
            },
            {
              path: PagePath.AdminRole,
              element: <RolePage />,
            },
            {
              path: PagePath.AdminCredentials,
              element: <CredentialsPage />,
            },
            {
              path: PagePath.AdminSetting,
              element: <EmptyPage title="공통설정" />,
            },
            {
              path: PagePath.User,
              element: <UserPage />,
            },
            {
              path: PagePath.Project,
              element: <Navigate to={PagePath.ProjectList} />,
            },
            {
              path: PagePath.ProjectList,
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
              element: <BusinessCategoryPage />,
            },
            {
              path: PagePath.ProjectIndustryCategory,
              element: <IndustryCategoryPage />,
            },
            {
              path: PagePath.ProjectTaskCategory,
              element: <TaskCategoryPage />,
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
          ],
        },
      ],
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ],
  { basename: process.env.PUBLIC_URL },
);
