import { FC } from 'react';

import { Container, ContainerProps, CssBaseline } from '@mui/material';

export const PageContainer: FC<ContainerProps> = ({ maxWidth, children, ...props }) => {
  return (
    <Container component="main" maxWidth={maxWidth || 'xl'} {...props}>
      <CssBaseline />
      {children}
    </Container>
  );
};
