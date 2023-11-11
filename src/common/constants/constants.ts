import { createTheme } from '@mui/material';
import {
  AdminPanelSettings,
  Build,
  CalendarMonth,
  FormatListBulleted,
  Groups,
  History,
  Home,
  Key,
  ManageAccounts,
  PersonAdd,
  PersonSearch,
  PieChart,
  Settings,
  Workspaces,
} from '@mui/icons-material';

import { SideMenuItemValue } from './types';
import { PagePath, RolePolicyValue, SideMenuType } from './enums';
import { createKey } from './helpers';

export const DEFAULT_THEME = createTheme({
  palette: { primary: { main: '#A00' } },
});

export const PAGE_NAMES: Partial<Record<PagePath, string>> = {
  [PagePath.Home]: '홈',
  [PagePath.Forbidden]: '접근제한',
  [PagePath.SignIn]: '로그인',
  [PagePath.SignUp]: '회원가입',
  [PagePath.MyPage]: '내정보',
  [PagePath.Role]: '역할 관리',
  [PagePath.Credential]: '계정 관리',
  [PagePath.TimeRecordTable]: '시간기록 테이블',
  [PagePath.TimeRecordAnalytics]: '시간기록 집계',
  [PagePath.Team]: '팀 목록',
  [PagePath.Member]: '구성원 목록',
  [PagePath.ProjectTable]: '프로젝트 목록',
  [PagePath.ProjectSetting]: '프로젝트 설정',
};

export const SIDE_MENUS: SideMenuItemValue[] = [
  {
    key: createKey('side-menu'),
    type: SideMenuType.Global,
    title: '홈',
    path: PagePath.Home,
    Icon: Home,
    divider: true,
  },
  {
    key: createKey('side-menu'),
    type: SideMenuType.Public,
    title: '로그인',
    path: PagePath.SignIn,
    Icon: Key,
  },
  {
    key: createKey('side-menu'),
    type: SideMenuType.Public,
    title: '회원가입',
    path: PagePath.SignUp,
    Icon: PersonAdd,
  },
  {
    key: createKey('side-menu'),
    type: SideMenuType.Private,
    title: '내 정보',
    path: PagePath.MyPage,
    Icon: PersonAdd,
    divider: true,
  },
  {
    key: createKey('side-menu'),
    type: SideMenuType.Private,
    title: '관리자',
    Icon: Settings,
    access: {
      accessRole: RolePolicyValue.Admin,
      accessUser: RolePolicyValue.Admin,
      accessTeam: RolePolicyValue.Admin,
      accessProject: RolePolicyValue.Admin,
    },
    children: [
      {
        key: createKey('side-menu'),
        type: SideMenuType.Private,
        title: '계정 관리',
        Icon: ManageAccounts,
        path: PagePath.Credential,
      },
      {
        key: createKey('side-menu'),
        type: SideMenuType.Private,
        title: '역할 관리',
        Icon: AdminPanelSettings,
        path: PagePath.Role,
      },
    ],
  },
  {
    key: createKey('side-menu'),
    type: SideMenuType.Private,
    title: '시간기록',
    Icon: History,
    children: [
      {
        key: createKey('side-menu'),
        type: SideMenuType.Private,
        title: '시간기록 테이블',
        Icon: CalendarMonth,
        path: PagePath.TimeRecordTable,
      },
      {
        key: createKey('side-menu'),
        type: SideMenuType.Private,
        title: '시간기록 집계',
        Icon: PieChart,
        path: PagePath.TimeRecordAnalytics,
      },
    ],
  },
  {
    key: createKey('side-menu'),
    type: SideMenuType.Private,
    title: '조직',
    Icon: Workspaces,
    access: {
      accessUser: RolePolicyValue.Read,
      accessTeam: RolePolicyValue.Read,
    },
    children: [
      {
        key: createKey('side-menu'),
        type: SideMenuType.Private,
        title: '팀 목록',
        Icon: Groups,
        path: PagePath.Team,
      },
      {
        key: createKey('side-menu'),
        type: SideMenuType.Private,
        title: '구성원 목록',
        Icon: PersonSearch,
        path: PagePath.Member,
      },
    ],
  },
  {
    key: createKey('side-menu'),
    type: SideMenuType.Private,
    title: '프로젝트',
    Icon: PersonAdd,
    access: {
      accessProject: RolePolicyValue.Read,
    },
    children: [
      {
        key: createKey('side-menu'),
        type: SideMenuType.Private,
        title: '프로젝트 목록',
        Icon: FormatListBulleted,
        path: PagePath.ProjectTable,
      },
      {
        key: createKey('side-menu'),
        type: SideMenuType.Private,
        title: '프로젝트 설정',
        Icon: Build,
        path: PagePath.ProjectSetting,
      },
    ],
  },
];
