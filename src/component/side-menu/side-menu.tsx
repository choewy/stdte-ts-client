import { FunctionComponent } from 'react';

import { Box, Drawer } from '@mui/material';

import { SideMenuStyle } from '@common';

import { SideMenuProps } from './types';
import { SideMenuList } from './side-menu-list';

export const SideMenu: FunctionComponent<SideMenuProps> = ({ open, onClose, listProps }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box role="presentation" sx={SideMenuStyle.Wrapper}>
        <SideMenuList {...listProps} />
      </Box>
    </Drawer>
  );
};
