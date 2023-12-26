import { FunctionComponent, PropsWithChildren } from 'react';

import { Paper, Typography } from '@mui/material';

export const UserPageCard: FunctionComponent<PropsWithChildren & { title: string }> = ({ title, children }) => {
  return (
    <Paper
      variant="outlined"
      {...{
        noValidate: true,
        sx: {
          p: 2,
          mb: 1,
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
