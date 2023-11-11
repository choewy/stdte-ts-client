import { FunctionComponent } from 'react';

import { AppBar, Box, Toolbar } from '@mui/material';

import { GnbStyle } from '@common';

import { GnbIconButton } from './gnb-icon-button';
import { GnbTitle } from './gnb-title';
import { GnbButtonGroup } from './gnb-button-group';
import { GnbProps } from './types';

export const Gnb: FunctionComponent<GnbProps> = ({ iconButtonProps, titleProps }) => {
  return (
    <Box sx={GnbStyle.Wrapper}>
      <AppBar position="static">
        <Toolbar>
          <GnbIconButton {...iconButtonProps} />
          <GnbTitle {...titleProps} />
          <GnbButtonGroup />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
