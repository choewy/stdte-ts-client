import { lazy } from 'react';

export const HomePage = lazy(() => import('./home.page'));
export const SignInPage = lazy(() => import('./signin.page'));
export const SignUpPage = lazy(() => import('./signup.page'));
export const SignOutPage = lazy(() => import('./signout.page'));
export const ForbiddenPage = lazy(() => import('./forbidden.page'));
export const MyPage = lazy(() => import('./mypage.page'));
export const RolePage = lazy(() => import('./role.page'));
export const CredentialPage = lazy(() => import('./credential.page'));
export const TimeRecordTablePage = lazy(() => import('./time-record-table.page'));
export const TimeRecordAnalyticsPage = lazy(() => import('./time-record-analytics.page'));
export const TeamPage = lazy(() => import('./team.page'));
export const MemberPage = lazy(() => import('./member.page'));
export const ProjectTablePage = lazy(() => import('./project-table.page'));
export const ProjectSettingPage = lazy(() => import('./project-setting.page'));
export const RedirectPage = lazy(() => import('./redirect.page'));
