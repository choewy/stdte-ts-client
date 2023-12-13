import { FunctionComponent } from 'react';

import { Divider } from '@mui/material';

import { SidebarMenuItemNavigatePropery } from '@service';
import { layoutHook } from '@hook';

import { SidebarMenuDefaultItem } from './sidebar-menu-default-item';

export const SidebarMenuNaviageItem: FunctionComponent<SidebarMenuItemNavigatePropery & { depth?: number }> = ({
  depth,
  ...props
}) => {
  const onClick = layoutHook.useSidebarNavigateCallback(props);

  return (
    <>
      <SidebarMenuDefaultItem item={props} onClick={onClick} depth={depth} />
      {props.divider && <Divider />}
    </>
  );
};
