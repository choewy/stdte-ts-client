import { FunctionComponent } from 'react';

import { AppBar, Box, Toolbar } from '@mui/material';

import { GnbStyle } from '@common';

import { GnbIconButton } from './gnb-icon-button';
import { GnbTitle } from './gnb-title';
import { GnbButtonGroup } from './gnb-button-group';

export const Gnb: FunctionComponent = () => {
  return (
    <Box sx={GnbStyle.Container}>
      <AppBar position="static">
        <Toolbar>
          <GnbIconButton />
          <GnbTitle />
          <GnbButtonGroup />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
