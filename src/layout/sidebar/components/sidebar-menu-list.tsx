import { FunctionComponent } from 'react';

import { List } from '@mui/material';

import { authorizeStore } from '@store';
import { SidebarMenuType, sidebarService } from '@service';

import { SidebarMenuNaviageItem } from './sidebar-menu-navigate-item';
import { SidebarMenuCollapseItem } from './sidebar-menu-collapse-item';

export const SidebarMenuList: FunctionComponent = () => {
  const authorize = authorizeStore.useValue();
  const items = sidebarService.filterItems(authorize);

  return (
    <List disablePadding>
      {items.map((item) =>
        item.type === SidebarMenuType.Navigate ? (
          <SidebarMenuNaviageItem key={item.id} {...item} />
        ) : (
          <SidebarMenuCollapseItem key={item.id} {...item} />
        ),
      )}
    </List>
  );
};
