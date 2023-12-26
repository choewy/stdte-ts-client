import { FunctionComponent } from 'react';

import { Paper, Typography } from '@mui/material';

import { MyPageCardProps } from './types';

export const MyPageCard: FunctionComponent<MyPageCardProps> = ({ title, children }) => {
  return (
    <Paper
      {...{
        elevation: 3,
        noValidate: true,
        sx: {
          p: 2,
          m: 1,
          flex: 1,
          minWidth: 340,
        },
      }}
    >
      <Typography
        {...{
          textAlign: 'center',
          variant: 'h6',
          sx: { my: 1 },
        }}
      >
        {title}
      </Typography>
      {children}
    </Paper>
  );
};
