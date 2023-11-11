import { Fragment, FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

import { AuthHook, SettingHook } from '@hook';
import { SettingStore } from '@store';
import { Gnb } from '@component';

export const Layout: FunctionComponent = () => {
  const { title, themeColor } = SettingStore.getInstance().useValue();

  SettingHook.getInstance().useChangeTitle();
  AuthHook.getInstance().useAuthGuard();

  return (
    <Fragment>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <ThemeProvider
        theme={createTheme({
          palette: { primary: { main: themeColor } },
        })}
      >
        <Gnb />
        <Outlet />
      </ThemeProvider>
    </Fragment>
  );
};
