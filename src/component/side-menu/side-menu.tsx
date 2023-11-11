import { FunctionComponent } from 'react';

import { Box, Drawer, List } from '@mui/material';

import { SideMenuStyle } from '@common';

import { SideMenuProps } from './types';

export const SideMenu: FunctionComponent<SideMenuProps> = ({ open, onClose }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box role="presentation" sx={SideMenuStyle.Wrapper}>
        <List></List>
      </Box>
    </Drawer>
  );
};
