import { FunctionComponent, PropsWithChildren } from 'react';

import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

import { layoutStore } from '@store';
import { ThemeProperty } from './theme.property';

export const Theme: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const layout = layoutStore.useValue();

  return <ThemeProvider theme={createTheme(new ThemeProperty(layout.theme))}>{children}</ThemeProvider>;
};
