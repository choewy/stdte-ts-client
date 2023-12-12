import { FunctionComponent, PropsWithChildren } from 'react';

import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

import { layoutStore } from '@store';

export const Theme: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const layout = layoutStore.useValue();

  return (
    <ThemeProvider
      theme={createTheme({
        palette: { primary: { main: layout.theme.color } },
      })}
    >
      {children}
    </ThemeProvider>
  );
};
