import { FunctionComponent } from 'react';

import { Paper, Typography } from '@mui/material';

import { MyPageCardProps } from './types';

export const MyPageCard: FunctionComponent<MyPageCardProps> = ({ title, children }) => {
  return (
    <Paper elevation={3} sx={{ p: 3, m: 1 }}>
      <Typography>{title}</Typography>
      {children}
    </Paper>
  );
};
