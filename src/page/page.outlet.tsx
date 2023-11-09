import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

import { AuthHook, SettingHook } from '@hook';
import { SettingStore } from '@store';

export const PageOutlet: FC = () => {
  const { title, themeColor } = SettingStore.getInstance().useValue();

  SettingHook.getInstance().useChangeTitle();
  AuthHook.getInstance().useAuthGuard();

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <ThemeProvider
        theme={createTheme({
          palette: { primary: { main: themeColor } },
        })}
      >
        <Outlet />
      </ThemeProvider>
    </>
  );
};
