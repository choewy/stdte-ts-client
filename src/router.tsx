import { Navigate, createBrowserRouter } from 'react-router-dom';

import { PagePath } from '@common';
import { Layout } from '@layout';
import {
  AllowGuestOnlyGuardPage,
  AllowUserOnlyGuardPage,
  AllowBlockOnlyGuardPage,
  HomePage,
  NotFoundPage,
  SignInPage,
  SignUpPage,
  SignOutPage,
  MyPage,
  RolePage,
  CredentialsPage,
  SettingPage,
  UserPage,
  ProjectPage,
  CustomerPage,
  BusinessCategoryPage,
  IndustryCategoryPage,
  TaskCategoryPage,
  TimeRecordLayout,
  TimeRecordPage,
  AnalysisProjectRecordPage,
  AnalysisTimeRecordPage,
  AnalysisUserRecordPage,
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
              element: <SettingPage />,
            },
            {
              path: PagePath.User,
              element: <Navigate to={PagePath.UserList} />,
            },
            {
              path: PagePath.UserList,
              element: <UserPage />,
            },
            {
              path: PagePath.UserAnalysis,
              element: <AnalysisUserRecordPage />,
            },
            {
              path: PagePath.Project,
              element: <Navigate to={PagePath.ProjectList} />,
            },
            {
              path: PagePath.ProjectList,
              element: <ProjectPage />,
            },
            {
              path: PagePath.ProjectCustomer,
              element: <CustomerPage />,
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
              path: PagePath.AnalysisProject,
              element: <Navigate to={PagePath.AnalysisProjectOrders} />,
            },
            {
              path: PagePath.AnalysisProjectOrders,
              element: <AnalysisProjectRecordPage />,
            },
            {
              path: PagePath.AnalysisProjectSales,
              element: <AnalysisProjectRecordPage />,
            },
            {
              path: PagePath.Time,
              element: <Navigate to={PagePath.TimeRecord} />,
            },
            {
              path: PagePath.TimeRecord,
              element: <TimeRecordLayout />,
              children: [
                {
                  path: PagePath.TimeRecordByUser,
                  element: <TimeRecordPage />,
                },
              ],
            },
            {
              path: PagePath.TimeRecordByUser,
              element: <TimeRecordPage />,
            },
            {
              path: PagePath.TimeAnalysis,
              element: <AnalysisTimeRecordPage />,
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
