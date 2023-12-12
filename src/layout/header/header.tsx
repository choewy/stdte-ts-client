import { FunctionComponent } from 'react';

import { AppBar, Box, Toolbar } from '@mui/material';

import { HeaderButtonGroup, HeaderIconButton, HeaderTitle } from './components';

export const Header: FunctionComponent = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <HeaderIconButton />
          <HeaderTitle />
          <HeaderButtonGroup />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
