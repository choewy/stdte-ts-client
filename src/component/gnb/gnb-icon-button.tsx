import { FunctionComponent } from 'react';

import { IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';

import { GnbIconButtonProps } from './types';
import { GnbStyle } from './gnb.style';

export const GnbIconButton: FunctionComponent<GnbIconButtonProps> = ({ onClick }) => {
  return (
    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={GnbStyle.IconButton} onClick={onClick}>
      <Menu />
    </IconButton>
  );
};
