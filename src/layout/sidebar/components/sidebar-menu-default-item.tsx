import { FunctionComponent } from 'react';

import { Box, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

import { SidebarMenuType } from '@service';
import { layoutHook } from '@hook';

import { SidebarMenuItemDefaultProps } from './types';

export const SidebarMenuDefaultItem: FunctionComponent<SidebarMenuItemDefaultProps> = ({
  item,
  onClick,
  collapsed,
  depth,
}) => {
  const selected = layoutHook.useSidbarSelectState(item);
  const icon = collapsed ? <ExpandLess /> : <ExpandMore />;

  return (
    <ListItem disablePadding>
      <ListItemButton selected={selected} onClick={onClick}>
        {depth && <Box sx={{ width: depth * 20 }} />}
        <ListItemIcon>
          <item.Icon {...{ sx: { fontSize: 18 } }} />
        </ListItemIcon>
        <ListItemText
          {...{
            primary: item.name,
            primaryTypographyProps: { sx: { fontSize: '12px' } },
          }}
        />
        {item.type === SidebarMenuType.Navigate ? null : icon}
      </ListItemButton>
    </ListItem>
  );
};
