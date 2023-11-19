import { FunctionComponent, PropsWithChildren } from 'react';

import { Box } from '@mui/material';

import { documentHook } from '@hook';
import { GridTableStyle } from './grid-table.style';

export const GridTableContainer: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const responseiveSize = documentHook.useResponsiveSize(120, 0);

  return <Box sx={{ ...GridTableStyle.Conatiner, height: responseiveSize.height }}>{children}</Box>;
};
