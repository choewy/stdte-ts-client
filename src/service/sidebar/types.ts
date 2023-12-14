import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';

import { RolePolicyProperty } from '@common';

import { SidebarMenuScope, SidebarMenuType } from './enums';

export type SidebarMenuItemDefaultProperty = {
  id?: string;
  scope: SidebarMenuScope | null;
  name: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  policy?: Partial<RolePolicyProperty>;
  divider?: boolean;
};

export type SidebarMenuItemNavigatePropery = SidebarMenuItemDefaultProperty & {
  type: SidebarMenuType.Navigate;
  path: string;
};

export type SidebarMenuItemCollapseProperty = SidebarMenuItemDefaultProperty & {
  type: SidebarMenuType.Collapse;
  prefix: string;
  children: SidebarMenuItemNavigatePropery[];
};

export type SidebarMenuItemProperty = SidebarMenuItemNavigatePropery | SidebarMenuItemCollapseProperty;
