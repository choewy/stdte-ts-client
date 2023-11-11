import { FunctionComponent } from 'react';

import { IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';

import { GnbStyle } from '@common';

import { GnbIconButtonProps } from './types';

export const GnbIconButton: FunctionComponent<GnbIconButtonProps> = ({ onClick }) => {
  return (
    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={GnbStyle.IconButton} onClick={onClick}>
      <Menu />
    </IconButton>
  );
};
