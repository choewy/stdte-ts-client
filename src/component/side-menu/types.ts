import { DrawerProps, ListItemButtonProps, ListItemTextProps } from '@mui/material';

import { Auth, Role, SideMenuItemValue } from '@common';

export type SideMenuListProps = { auth: Auth | null; role: Role | null };
export type SideMenuItemProps = { item: SideMenuItemValue };

export type SideMenuDefaultProps = Pick<ListItemButtonProps, 'selected' | 'onClick'> &
  Pick<SideMenuItemValue, 'Icon'> &
  Pick<ListItemTextProps, 'primary'> & {
    type: 'navigate' | 'collapse';
    divider?: boolean;
  };

export type SideMenuProps = Pick<DrawerProps, 'open' | 'onClose'> & {
  listProps: SideMenuListProps;
};
