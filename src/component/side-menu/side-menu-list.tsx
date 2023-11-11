import { FunctionComponent } from 'react';

import { List } from '@mui/material';

import { SideMenuListProps } from './types';
import { SideMenuItem } from './side-menu-item';
import { SideMenuHook } from './side-menu.hook';

export const SideMenuList: FunctionComponent<SideMenuListProps> = ({ auth, role }) => {
  const items = SideMenuHook.getInstance().getSidebarMenuValuesByFilter(auth, role);

  return (
    <List>
      {items.map((item) => (
        <SideMenuItem key={item.key} item={item} />
      ))}
    </List>
  );
};
