import { FunctionComponent } from 'react';

import { Box, Drawer } from '@mui/material';

import { layoutStore } from '@store';
import { layoutHook } from '@hook';

import { SidebarStyle } from './sidebar.style';
import { SidebarMenuList } from './components';

export const Sidebar: FunctionComponent = () => {
  const layout = layoutStore.useValue();
  const onClose = layoutHook.useSidebarCallback(false);

  return (
    <Drawer anchor="left" open={layout.sidebar.open} onClose={onClose}>
      <Box sx={SidebarStyle.Wrapper()}>
        <SidebarMenuList />
      </Box>
    </Drawer>
  );
};
