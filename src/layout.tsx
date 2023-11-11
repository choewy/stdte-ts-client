import { Fragment, FunctionComponent, useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

import { AuthHook, SettingHook } from '@hook';
import { SettingStore } from '@store';
import { Gnb, SideMenu } from '@component';

export const Layout: FunctionComponent = () => {
  const [{ helmetTitle, themeColor, gnbTitle, openSideMenu }, setSettingStore] = SettingStore.getInstance().useState();

  SettingHook.getInstance().useChangeTitles();
  AuthHook.getInstance().useAuthGuard();

  const onOpenSideMenu = useCallback(() => {
    setSettingStore((prev) => ({ ...prev, openSideMenu: true }));
  }, [setSettingStore]);

  const onCloseSideMenu = useCallback(() => {
    setSettingStore((prev) => ({ ...prev, openSideMenu: false }));
  }, [setSettingStore]);

  return (
    <Fragment>
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <ThemeProvider theme={createTheme({ palette: { primary: { main: themeColor } } })}>
        <Gnb iconButtonProps={{ onClick: onOpenSideMenu }} titleProps={{ title: gnbTitle }} />
        <SideMenu open={openSideMenu} onClose={onCloseSideMenu} />
        <Outlet />
      </ThemeProvider>
    </Fragment>
  );
};
