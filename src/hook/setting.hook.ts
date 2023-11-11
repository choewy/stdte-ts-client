import { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { PageGnbTitle, PageHelmetTitle, PagePath } from '@common';
import { SettingStore } from '@store';

export class SettingHook {
  private static instance = new SettingHook();

  public static getInstance() {
    return this.instance;
  }

  useChangeTitles(): void {
    const location = useLocation();
    const setSetting = SettingStore.getInstance().useSetState();

    useEffect(() => {
      let helmetTitle = '';
      let gnbTitle = '';

      switch (location.pathname) {
        case PagePath.Home:
          helmetTitle = PageHelmetTitle.Home;
          gnbTitle = PageGnbTitle.Home;

          break;

        case PagePath.SignIn:
          helmetTitle = PageHelmetTitle.SignIn;
          gnbTitle = PageGnbTitle.SignIn;

          break;

        case PagePath.SignUp:
          helmetTitle = PageHelmetTitle.SignUp;
          gnbTitle = PageGnbTitle.SignUp;

          break;

        case PagePath.MyPage:
          helmetTitle = PageHelmetTitle.MyPage;
          gnbTitle = PageGnbTitle.MyPage;

          break;

        case PagePath.Role:
          helmetTitle = PageHelmetTitle.Role;
          gnbTitle = PageGnbTitle.Role;

          break;

        case PagePath.Credential:
          helmetTitle = PageHelmetTitle.Credential;
          gnbTitle = PageGnbTitle.Credential;

          break;

        case PagePath.TimeRecordTable:
          helmetTitle = PageHelmetTitle.TimeRecordTable;
          gnbTitle = PageGnbTitle.TimeRecordTable;

          break;

        case PagePath.TimeRecordAnalytics:
          helmetTitle = PageHelmetTitle.TimeRecordAnalytics;
          gnbTitle = PageGnbTitle.TimeRecordAnalytics;

          break;

        case PagePath.Team:
          helmetTitle = PageHelmetTitle.Team;
          gnbTitle = PageGnbTitle.Team;

          break;

        case PagePath.User:
          helmetTitle = PageHelmetTitle.User;
          gnbTitle = PageGnbTitle.User;
          break;

        case PagePath.ProjectTable:
          helmetTitle = PageHelmetTitle.ProjectTable;
          gnbTitle = PageGnbTitle.ProjectTable;
          break;

        case PagePath.ProjectSetting:
          helmetTitle = PageHelmetTitle.ProjectSetting;
          gnbTitle = PageGnbTitle.ProjectSetting;

          break;
      }

      setSetting((prev) => ({
        ...prev,
        helmetTitle,
        gnbTitle,
        openSideMenu: false,
      }));
    }, [location.pathname, setSetting]);
  }

  useSideMenuCallback(openSideMenu: boolean) {
    const setSettingStore = SettingStore.getInstance().useSetState();

    return useCallback(() => {
      setSettingStore((prev) => ({ ...prev, openSideMenu }));
    }, [setSettingStore]);
  }
}
