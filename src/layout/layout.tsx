import { Fragment, FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';

import { credentialsHook } from '@hook';

import { Helmet } from './helmet';
import { Header } from './header';
import { Snack } from './snack';
import { Theme } from './theme';
import { Sidebar } from './sidebar';

export const Layout: FunctionComponent = () => {
  credentialsHook.useCredentials();

  return (
    <Fragment>
      <Helmet />
      <Theme>
        <Header />
        <Sidebar />
        <Snack />
        <Outlet />
      </Theme>
    </Fragment>
  );
};
