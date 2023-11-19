import { Fragment, FunctionComponent } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

import { signStore, settingStore } from '@store';
import { notiHook, settingHook, authHook } from '@hook';
import { Gnb, Notisnack, SideMenu } from '@component';

export const Layout: FunctionComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { helmetTitle, themeColor, gnbTitle, openSideMenu } = settingStore.useValue();
  const { ok, auth, role } = signStore.useValue();

  settingHook.useChangeTitles();

  notiHook.useListenEvent();
  authHook.useAuthCheck(ok, location, navigate);
  authHook.useAuthGuard(ok, auth, location, navigate);

  return (
    <Fragment>
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <ThemeProvider theme={createTheme({ palette: { primary: { main: themeColor } } })}>
        <Notisnack noti={notiHook.useConsume()} />
        <Gnb
          iconButtonProps={{ onClick: settingHook.useSideMenuCallback(true) }}
          titleProps={{ title: gnbTitle }}
          buttonGroupProps={{
            auth: ok,
            navigate,
          }}
        />
        <SideMenu open={openSideMenu} onClose={settingHook.useSideMenuCallback(false)} listProps={{ auth, role }} />
        <Outlet />
      </ThemeProvider>
    </Fragment>
  );
};
