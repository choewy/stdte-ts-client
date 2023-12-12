import { FunctionComponent } from 'react';

import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

import { SidebarMenuItemProperty, SidebarMenuType } from '@service';
import { layoutHook } from '@hook';

export const SidebarMenuDefaultItem: FunctionComponent<{
  item: SidebarMenuItemProperty;
  onClick: () => void;
}> = ({ item, onClick }) => {
  const selected = layoutHook.useSidbarSelectState(item);

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton selected={selected} onClick={onClick}>
          <ListItemIcon>
            <item.Icon />
          </ListItemIcon>
          <ListItemText primary={item.name} />
          {item.type === SidebarMenuType.Navigate ? null : selected ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListItem>
    </>
  );
};
