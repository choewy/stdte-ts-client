import { FunctionComponent } from 'react';

import { Collapse, Divider, List } from '@mui/material';

import { SidebarMenuItemCollapseProperty } from '@service';
import { layoutHook } from '@hook';

import { SidebarMenuDefaultItem } from './sidebar-menu-default-item';
import { SidebarMenuNaviageItem } from './sidebar-menu-navigate-item';

export const SidebarMenuCollapseItem: FunctionComponent<SidebarMenuItemCollapseProperty> = (props) => {
  const [collapsed, onClick] = layoutHook.useSidebarCollapseState(props);

  return (
    <>
      <SidebarMenuDefaultItem item={props} onClick={onClick} collapsed={collapsed} />
      <Collapse in={collapsed} timeout="auto" unmountOnExit>
        <List disablePadding component="div">
          {props.children.map((child) => (
            <SidebarMenuNaviageItem key={child.key} {...child} depth={1} />
          ))}
        </List>
        <Divider />
      </Collapse>
      {props.divider && collapsed === false && <Divider />}
    </>
  );
};
