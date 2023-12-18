import { FunctionComponent, PropsWithChildren } from 'react';

import { Paper, Typography } from '@mui/material';

export const SectionColumn: FunctionComponent<
  PropsWithChildren & {
    title?: string;
    minWidth?: number;
  }
> = ({ title, minWidth, children }) => {
  return (
    <Paper
      {...{
        elevation: 3,
        noValidate: true,
        sx: { p: 2, mb: 1, flex: 1, overflow: 'scroll', minWidth },
      }}
    >
      {title && (
        <Typography textAlign="center" variant="h6" sx={{ mt: 1, fontSize: 16 }}>
          {title}
        </Typography>
      )}
      {children}
    </Paper>
  );
};
