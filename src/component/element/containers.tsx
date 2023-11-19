import { FunctionComponent } from 'react';

import { Container, ContainerProps, CssBaseline } from '@mui/material';

export const PageContainer: FunctionComponent<ContainerProps> = ({ maxWidth, children, ...props }) => {
  return (
    <Container component="main" maxWidth={maxWidth || 'xl'} {...props} sx={{ ...(props.sx ?? {}), mt: 4 }}>
      <CssBaseline />
      {children}
    </Container>
  );
};
