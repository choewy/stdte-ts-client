import { Fragment, FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

import { helmetStore, themeStore } from '@store';
import { credentialsHook } from '@hook';

import { SnackProvider } from './snack';

export const Layout: FunctionComponent = () => {
  const helmet = helmetStore.useValue();
  const theme = themeStore.useValue();

  credentialsHook.useCredentials();

  return (
    <Fragment>
      <Helmet>
        <title>{helmet.title}</title>
      </Helmet>
      <ThemeProvider theme={createTheme({ palette: { primary: { main: theme.color } } })}>
        <SnackProvider />
        <Outlet />
      </ThemeProvider>
    </Fragment>
  );
};
