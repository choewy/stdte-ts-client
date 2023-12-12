import { FunctionComponent } from 'react';

import { Menu } from '@mui/icons-material';
import { IconButton } from '@mui/material';

import { layoutHook } from '@hook';

import { HeaderStyle } from '../header.style';

export const HeaderIconButton: FunctionComponent = () => {
  const onClick = layoutHook.useHeaderIconButtonClickCallback();

  return (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={HeaderStyle.IconButton()}
      onClick={onClick}
    >
      <Menu />
    </IconButton>
  );
};
