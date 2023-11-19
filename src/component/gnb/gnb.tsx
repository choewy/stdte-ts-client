import { FunctionComponent } from 'react';

import { AppBar, Box, Toolbar } from '@mui/material';

import { GnbProps } from './types';
import { GnbStyle } from './gnb.style';
import { GnbIconButton } from './gnb-icon-button';
import { GnbTitle } from './gnb-title';
import { GnbButtonGroup } from './gnb-button-group';

export const Gnb: FunctionComponent<GnbProps> = ({ iconButtonProps, titleProps, buttonGroupProps }) => {
  return (
    <Box sx={GnbStyle.Wrapper}>
      <AppBar position="static">
        <Toolbar>
          <GnbIconButton {...iconButtonProps} />
          <GnbTitle {...titleProps} />
          <GnbButtonGroup {...buttonGroupProps} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
