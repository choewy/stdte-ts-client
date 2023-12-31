import { v4 } from 'uuid';

import {
  AdminPanelSettings,
  Assignment,
  BarChart,
  Bookmark,
  CalendarMonth,
  CorporateFare,
  Factory,
  FormatListBulleted,
  Functions,
  Group,
  History,
  Home,
  Label,
  ManageAccounts,
  Settings,
  TableChart,
  Tune,
  WorkOutline,
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
          Icon: Tune,
          path: PagePath.AdminSetting,
          policy: { setting: RolePolicyLevel.Admin },
        },
      ],
    },
    {
      name: '구성원',
      type: SidebarMenuType.Collapse,
      scope: SidebarMenuScope.UserOnly,
      Icon: Group,
      prefix: PagePath.User,
      policy: {},
      divider: true,
      children: [
        {
          name: '구성원 목록',
          type: SidebarMenuType.Navigate,
          scope: SidebarMenuScope.UserOnly,
          Icon: FormatListBulleted,
          path: PagePath.UserList,
          policy: { user: RolePolicyLevel.Read },
        },
        {
          name: '인력변동 현황',
          type: SidebarMenuType.Navigate,
          scope: SidebarMenuScope.UserOnly,
          Icon: TableChart,
          path: PagePath.UserAnalysis,
          policy: { user: RolePolicyLevel.Read },
        },
      ],
    },
    {
      name: '사업관리',
      type: SidebarMenuType.Collapse,
      scope: SidebarMenuScope.UserOnly,
      Icon: Assignment,
      prefix: PagePath.Project,
      divider: true,
      policy: {},
      children: [
        {
          name: '사업목록',
          type: SidebarMenuType.Navigate,
          scope: SidebarMenuScope.UserOnly,
          Icon: FormatListBulleted,
          path: PagePath.ProjectList,
          policy: { project: RolePolicyLevel.Read },
        },
        {
          name: '고객사',
          type: SidebarMenuType.Navigate,
          scope: SidebarMenuScope.UserOnly,
          Icon: CorporateFare,
          path: PagePath.ProjectCustomer,
          policy: { customer: RolePolicyLevel.Read },
        },
        {
          name: '사업구분',
          type: SidebarMenuType.Navigate,
          scope: SidebarMenuScope.UserOnly,
          Icon: WorkOutline,
          path: PagePath.ProjectBusinessCategory,
          policy: { businessCategory: RolePolicyLevel.Read },
        },
        {
          name: '산업분야',
          type: SidebarMenuType.Navigate,
          scope: SidebarMenuScope.UserOnly,
          Icon: Factory,
          path: PagePath.ProjectIndustryCategory,
          policy: { industryCategory: RolePolicyLevel.Read },
        },
      ],
    },
    {
      name: '사업분석',
      type: SidebarMenuType.Collapse,
      scope: SidebarMenuScope.UserOnly,
      Icon: BarChart,
      prefix: PagePath.AnalysisProject,
      divider: true,
      policy: { project: RolePolicyLevel.Admin },
      children: [
        {
          name: '수주분석',
          type: SidebarMenuType.Navigate,
          scope: SidebarMenuScope.UserOnly,
          Icon: Label,
          path: PagePath.AnalysisProjectOrders,
        },
        {
          name: '매출분석',
          type: SidebarMenuType.Navigate,
          scope: SidebarMenuScope.UserOnly,
          Icon: Label,
          path: PagePath.AnalysisProjectSales,
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
      children: [
        {
          name: '테이블',
          type: SidebarMenuType.Navigate,
          scope: SidebarMenuScope.UserOnly,
          Icon: CalendarMonth,
          path: PagePath.TimeRecord,
        },
        {
          name: '수행업무구분',
          type: SidebarMenuType.Navigate,
          scope: SidebarMenuScope.UserOnly,
          Icon: Bookmark,
          path: PagePath.TimeTaskCategory,
          policy: { taskCategory: RolePolicyLevel.Read },
        },
        {
          name: '집계',
          type: SidebarMenuType.Navigate,
          scope: SidebarMenuScope.UserOnly,
          Icon: Functions,
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
        return false;
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

      if (item.type === SidebarMenuType.Collapse) {
        item.children = item.children.filter((child, i) => {
          child.id = [this.id, item.id, child.type, child.scope, i].join('-');

          if (child.hidden === true) {
            return false;
          }

          if (child.scope === null) {
            return true;
          }

          if (child.scope !== scope) {
            return false;
          }

          if (child.policy == null) {
            return true;
          }

          if (authorize.role == null) {
            return false;
          }

          const keys = Object.keys(child.policy) as RolePolicyKey[];

          for (const key of keys) {
            const policy = child.policy[key];

            if (policy == null) {
              continue;
            }

            if (authorize.role.rolePolicy[key] < policy) {
              return false;
            }
          }

          return true;
        });
      }

      return true;
    });

    return items;
  }
}

export const sidebarService = new SidebarService();
