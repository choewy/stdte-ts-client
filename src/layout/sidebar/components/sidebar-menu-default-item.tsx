import { FunctionComponent } from 'react';

import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

import { SidebarMenuItemProperty, SidebarMenuType } from '@service';
import { layoutHook } from '@hook';

export const SidebarMenuDefaultItem: FunctionComponent<{
  item: SidebarMenuItemProperty;
  onClick: () => void;
  collapsed?: boolean;
}> = ({ item, onClick, collapsed }) => {
  const selected = layoutHook.useSidbarSelectState(item);

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton selected={selected} onClick={onClick}>
          <ListItemIcon>
            <item.Icon />
          </ListItemIcon>
          <ListItemText primary={item.name} />
          {item.type === SidebarMenuType.Navigate ? null : collapsed ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListItem>
    </>
  );
};
