import { FunctionComponent } from 'react';

import { Collapse, Divider, List } from '@mui/material';

import { SidebarMenuItemCollapseProperty } from '@service';
import { layoutHook } from '@hook';

import { SidebarStyle } from '../sidebar.style';
import { SidebarMenuDefaultItem } from './sidebar-menu-default-item';
import { SidebarMenuNaviageItem } from './sidebar-menu-navigate-item';

export const SidebarMenuCollapseItem: FunctionComponent<SidebarMenuItemCollapseProperty> = (props) => {
  const [collapsed, onClick] = layoutHook.useSidebarCollapseState(props);

  return (
    <>
      <SidebarMenuDefaultItem item={props} onClick={onClick} collapsed={collapsed} />
      <Collapse in={collapsed} timeout="auto" unmountOnExit>
        <List disablePadding component="div" sx={SidebarStyle.Item(1)}>
          {props.children.map((child) => (
            <SidebarMenuNaviageItem key={child.key} {...child} />
          ))}
        </List>
        <Divider />
      </Collapse>
      {props.divider && <Divider />}
    </>
  );
};
