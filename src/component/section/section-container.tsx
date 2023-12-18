import { FunctionComponent, PropsWithChildren } from 'react';

import { Box } from '@mui/material';

export const SectionContainer: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <Box sx={{ display: 'flex', gap: 2, height: '100%' }}>{children}</Box>;
};
