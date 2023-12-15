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
import { CredentialsStoreProps } from '@store';

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

  filterItems(credentials: CredentialsStoreProps) {
    const scope =
      credentials === null || credentials === false ? SidebarMenuScope.GuestOnly : SidebarMenuScope.UserOnly;

    const items = this.items.filter((item, i) => {
      item.id = [this.id, item.type, item.scope, i].join('-');

      if (item.scope === null) {
        return true;
      }

      if (item.scope !== scope) {
        return false;
      }

      if (item.policy == null) {
        return true;
      }

      if (credentials === null || credentials === false) {
        return false;
      }

      if (credentials.role == null) {
        return;
      }

      const keys = Object.keys(item.policy) as RolePolicyKey[];

      for (const key of keys) {
        const policy = item.policy[key];

        if (policy == null) {
          continue;
        }

        if (credentials.role.rolePolicy[key] < policy) {
          return false;
        }
      }

      return true;
    });

    return items;
  }
}

export const sidebarService = new SidebarService();
