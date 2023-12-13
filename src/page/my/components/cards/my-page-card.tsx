import { FunctionComponent } from 'react';

import { Paper, Typography } from '@mui/material';

import { MyPageCardProps } from './types';
import { MyProps } from '@props';

export const MyPageCard: FunctionComponent<MyPageCardProps> = ({ title, children }) => {
  return (
    <Paper {...MyProps.paper({})}>
      <Typography {...MyProps.typography({})}>{title}</Typography>
      {children}
    </Paper>
  );
};
