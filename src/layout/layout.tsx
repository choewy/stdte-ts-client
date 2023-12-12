import { Fragment, FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';

import { CssBaseline } from '@mui/material';

import { credentialsHook, layoutHook } from '@hook';

import { Helmet } from './helmet';
import { Header } from './header';
import { Snack } from './snack';
import { Theme } from './theme';
import { Sidebar } from './sidebar';

export const Layout: FunctionComponent = () => {
  layoutHook.useTitleListener();
  layoutHook.useResizeListener();
  credentialsHook.useCredentials();

  return (
    <Fragment>
      <Helmet />
      <Theme>
        <Header />
        <Sidebar />
        <Snack />
        <CssBaseline />
        <Outlet />
      </Theme>
    </Fragment>
  );
};
