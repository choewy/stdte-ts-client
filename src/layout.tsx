import { Fragment, FunctionComponent } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

import { AuthStore, SettingStore } from '@store';
import { AuthHook, NotiHook, SettingHook } from '@hook';
import { Gnb, Notisnack, SideMenu } from '@component';

export const Layout: FunctionComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { helmetTitle, themeColor, gnbTitle, openSideMenu } = SettingStore.getInstance().useValue();
  const { ok, auth, role } = AuthStore.getInstance().useValue();

  SettingHook.getInstance().useChangeTitles();

  NotiHook.getInstance().useListenEvent();
  AuthHook.getInstance().useAuthCheck(ok, location, navigate);
  AuthHook.getInstance().useAuthGuard(ok, auth, location, navigate);

  return (
    <Fragment>
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <ThemeProvider theme={createTheme({ palette: { primary: { main: themeColor } } })}>
        <Notisnack noti={NotiHook.getInstance().useConsume()} />
        <Gnb
          iconButtonProps={{ onClick: SettingHook.getInstance().useSideMenuCallback(true) }}
          titleProps={{ title: gnbTitle }}
          buttonGroupProps={{
            auth: ok,
            navigate,
          }}
        />
        <SideMenu
          open={openSideMenu}
          onClose={SettingHook.getInstance().useSideMenuCallback(false)}
          listProps={{ auth, role }}
        />
        <Outlet />
      </ThemeProvider>
    </Fragment>
  );
};
