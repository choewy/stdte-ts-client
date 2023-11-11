import { FunctionComponent } from 'react';

import { Typography } from '@mui/material';

import { GnbStyle } from '@common';

import { GnbTitleProps } from './types';

export const GnbTitle: FunctionComponent<GnbTitleProps> = ({ title }) => {
  return (
    <Typography variant="h6" component="div" sx={GnbStyle.Title}>
      {title}
    </Typography>
  );
};
