import { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { PageName, PagePath } from '@common';
import { SettingStore } from '@store';

export class SettingHook {
  private static instance = new SettingHook();

  public static getInstance() {
    return this.instance;
  }

  useChangeTitles(): void {
    const location = useLocation();
    const pathname = location.pathname;

    const setSetting = SettingStore.getInstance().useSetState();

    useEffect(() => {
      let helmetTitle = '';
      let gnbTitle = '';

      switch (pathname) {
        case PagePath.Home:
          helmetTitle = PageName.Home;
          gnbTitle = PageName.Home;

          break;

        case PagePath.SignIn:
          helmetTitle = PageName.SignIn;
          gnbTitle = PageName.SignIn;

          break;

        case PagePath.SignUp:
          helmetTitle = PageName.SignUp;
          gnbTitle = PageName.SignUp;

          break;

        case PagePath.MyPage:
          helmetTitle = PageName.MyPage;
          gnbTitle = PageName.MyPage;

          break;

        case PagePath.Role:
          helmetTitle = PageName.Role;
          gnbTitle = PageName.Role;

          break;

        case PagePath.Credential:
          helmetTitle = PageName.Credential;
          gnbTitle = PageName.Credential;

          break;

        case PagePath.TimeRecordTable:
          helmetTitle = PageName.TimeRecordTable;
          gnbTitle = PageName.TimeRecordTable;

          break;

        case PagePath.TimeRecordAnalytics:
          helmetTitle = PageName.TimeRecordAnalytics;
          gnbTitle = PageName.TimeRecordAnalytics;

          break;

        case PagePath.Team:
          helmetTitle = PageName.Team;
          gnbTitle = PageName.Team;

          break;

        case PagePath.Member:
          helmetTitle = PageName.Member;
          gnbTitle = PageName.Member;
          break;

        case PagePath.ProjectTable:
          helmetTitle = PageName.ProjectTable;
          gnbTitle = PageName.ProjectTable;
          break;

        case PagePath.ProjectSetting:
          helmetTitle = PageName.ProjectSetting;
          gnbTitle = PageName.ProjectSetting;

          break;
      }

      setSetting((prev) => ({
        ...prev,
        helmetTitle,
        gnbTitle,
        openSideMenu: false,
      }));
    }, [pathname, setSetting]);
  }

  useSideMenuCallback(openSideMenu: boolean) {
    const setSettingStore = SettingStore.getInstance().useSetState();

    return useCallback(() => {
      setSettingStore((prev) => ({ ...prev, openSideMenu }));
    }, [setSettingStore]);
  }
}
