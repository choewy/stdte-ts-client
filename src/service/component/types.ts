import { VariantType } from 'notistack';

import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';

import { RolePolicyProperty } from '@common';

import { SidebarMenuScope, SidebarMenuType } from './enums';

export type SnackEventDetail = {
  id: string;
  variant: VariantType;
  message: string;
};

export type SidebarMenuItemDefaultProperty = {
  hidden?: boolean;
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

export type ComponentWidthOptions = {
  width?: boolean;
  minWidth?: boolean;
  maxWidth?: boolean;
};
