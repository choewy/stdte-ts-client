import { v4 } from 'uuid';

import {
  AdminPanelSettings,
  CalendarMonth,
  History,
  Home,
  ManageAccounts,
  PieChart,
  Settings,
} from '@mui/icons-material';

import { PagePath, RolePolicyKey, RolePolicyLevel } from '@common';
import { AuzhorizeStoreProps } from '@store';

import { SidebarMenuScope, SidebarMenuType } from './enums';
import { SidebarMenuItemProperty } from './types';

export class SidebarService {
  private readonly id = ['sidebar', v4()].join('-');
  private readonly items: SidebarMenuItemProperty[] = [
    {
      name: '홈',
      type: SidebarMenuType.Navigate,
      scope: null,
      path: PagePath.Home,
      Icon: Home,
      divider: true,
    },
    {
      hidden: true,
      name: '개발자',
      type: SidebarMenuType.Collapse,
      scope: SidebarMenuScope.UserOnly,
      prefix: PagePath.Developer,
      Icon: Settings,
      divider: true,
      policy: {
        credentials: RolePolicyLevel.Developer,
        roleAndPolicy: RolePolicyLevel.Developer,
        setting: RolePolicyLevel.Developer,
        customer: RolePolicyLevel.Developer,
        user: RolePolicyLevel.Developer,
        project: RolePolicyLevel.Developer,
        taskCategory: RolePolicyLevel.Developer,
        industryCategory: RolePolicyLevel.Developer,
        businessCategory: RolePolicyLevel.Developer,
      },
      children: [],
    },
    {
      name: '관리자',
      type: SidebarMenuType.Collapse,
      scope: SidebarMenuScope.UserOnly,
      prefix: PagePath.Admin,
      Icon: Settings,
      divider: true,
      policy: {
        credentials: RolePolicyLevel.Admin,
        roleAndPolicy: RolePolicyLevel.Admin,
        setting: RolePolicyLevel.Admin,
        customer: RolePolicyLevel.Admin,
        user: RolePolicyLevel.Admin,
        project: RolePolicyLevel.Admin,
        taskCategory: RolePolicyLevel.Admin,
        industryCategory: RolePolicyLevel.Admin,
        businessCategory: RolePolicyLevel.Admin,
      },
      children: [
        {
          name: '계정관리',
          type: SidebarMenuType.Navigate,
          scope: SidebarMenuScope.UserOnly,
          Icon: ManageAccounts,
          path: PagePath.AdminCredentials,
          policy: { credentials: RolePolicyLevel.Admin },
        },
        {
          name: '역할관리',
          type: SidebarMenuType.Navigate,
          scope: SidebarMenuScope.UserOnly,
          Icon: AdminPanelSettings,
          path: PagePath.AdminRole,
          policy: { roleAndPolicy: RolePolicyLevel.Admin },
        },
        {
          name: '공통설정',
          type: SidebarMenuType.Navigate,
          scope: SidebarMenuScope.UserOnly,
          Icon: History,
          path: PagePath.AdminSetting,
          policy: { setting: RolePolicyLevel.Admin },
        },
      ],
    },
    {
      name: '구성원',
      type: SidebarMenuType.Navigate,
      scope: SidebarMenuScope.UserOnly,
      Icon: History,
      path: PagePath.User,
      policy: { user: RolePolicyLevel.Read },
      divider: true,
    },
    {
      name: '사업관리',
      type: SidebarMenuType.Collapse,
      scope: SidebarMenuScope.UserOnly,
      Icon: History,
      prefix: PagePath.Project,
      divider: true,
      policy: {},
      children: [
        {
          name: '사업목록',
          type: SidebarMenuType.Navigate,
          scope: SidebarMenuScope.UserOnly,
          Icon: CalendarMonth,
          path: PagePath.ProjectList,
          policy: { project: RolePolicyLevel.Read },
        },
        {
          name: '고객사',
          type: SidebarMenuType.Navigate,
          scope: SidebarMenuScope.UserOnly,
          Icon: History,
          path: PagePath.ProjectCustomer,
          policy: { customer: RolePolicyLevel.Read },
        },
        {
          name: '사업구분',
          type: SidebarMenuType.Navigate,
          scope: SidebarMenuScope.UserOnly,
          Icon: CalendarMonth,
          path: PagePath.ProjectBusinessCategory,
          policy: { businessCategory: RolePolicyLevel.Read },
        },
        {
          name: '산업분야',
          type: SidebarMenuType.Navigate,
          scope: SidebarMenuScope.UserOnly,
          Icon: CalendarMonth,
          path: PagePath.ProjectIndustryCategory,
          policy: { industryCategory: RolePolicyLevel.Read },
        },
        {
          name: '수행업무구분',
          type: SidebarMenuType.Navigate,
          scope: SidebarMenuScope.UserOnly,
          Icon: CalendarMonth,
          path: PagePath.ProjectTaskCategory,
          policy: { taskCategory: RolePolicyLevel.Read },
        },
      ],
    },
    {
      name: '시간관리',
      type: SidebarMenuType.Collapse,
      scope: SidebarMenuScope.UserOnly,
      Icon: History,
      prefix: PagePath.Time,
      divider: true,
      policy: {},
      children: [
        {
          name: '테이블',
          type: SidebarMenuType.Navigate,
          scope: SidebarMenuScope.UserOnly,
          Icon: CalendarMonth,
          path: PagePath.TimeRecord,
        },
        {
          name: '집계',
          type: SidebarMenuType.Navigate,
          scope: SidebarMenuScope.UserOnly,
          Icon: PieChart,
          path: PagePath.TimeAnalysis,
        },
      ],
    },
  ];

  filterItems(authorize: AuzhorizeStoreProps) {
    const scope = authorize === null || authorize === false ? SidebarMenuScope.GuestOnly : SidebarMenuScope.UserOnly;

    const items = this.items.filter((item, i) => {
      item.id = [this.id, item.type, item.scope, i].join('-');

      if (item.hidden === true) {
        return false;
      }

      if (item.scope === null) {
        return true;
      }

      if (item.scope !== scope) {
        return false;
      }

      if (item.policy == null) {
        return true;
      }

      if (authorize === null || authorize === false) {
        return false;
      }

      if (authorize.role == null) {
        return;
      }

      const keys = Object.keys(item.policy) as RolePolicyKey[];

      for (const key of keys) {
        const policy = item.policy[key];

        if (policy == null) {
          continue;
        }

        if (authorize.role.rolePolicy[key] < policy) {
          return false;
        }
      }

      return true;
    });

    return items;
  }
}

export const sidebarService = new SidebarService();
