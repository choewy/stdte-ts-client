import { Fragment, FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

import { PagePath } from '@common';
import { AuthStore, SettingStore } from '@store';
import { AuthHook, navigateHook, SettingHook } from '@hook';
import { Gnb, SideMenu } from '@component';

export const Layout: FunctionComponent = () => {
  const { helmetTitle, themeColor, gnbTitle, openSideMenu } = SettingStore.getInstance().useValue();
  const { ok } = AuthStore.getInstance().useValue();

  SettingHook.getInstance().useChangeTitles();
  AuthHook.getInstance().useAuthCheck();
  AuthHook.getInstance().useAuthGuard();

  return (
    <Fragment>
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <ThemeProvider theme={createTheme({ palette: { primary: { main: themeColor } } })}>
        <Gnb
          iconButtonProps={{ onClick: SettingHook.getInstance().useSideMenuCallback(true) }}
          titleProps={{ title: gnbTitle }}
          buttonGroupProps={{
            visible: ok,
            onMyPage: navigateHook.useNavigateCallback(PagePath.MyPage),
            onSignout: navigateHook.useNavigateCallback(PagePath.SignOut, true),
          }}
        />
        <SideMenu open={openSideMenu} onClose={SettingHook.getInstance().useSideMenuCallback(false)} />
        <Outlet />
      </ThemeProvider>
    </Fragment>
  );
};
