import { FunctionComponent } from 'react';

import { Typography } from '@mui/material';

import { GnbTitleProps } from './types';
import { GnbStyle } from './gnb.style';

export const GnbTitle: FunctionComponent<GnbTitleProps> = ({ title }) => {
  return (
    <Typography variant="h6" component="div" sx={GnbStyle.Title}>
      {title}
    </Typography>
  );
};
