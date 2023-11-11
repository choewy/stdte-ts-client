import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { PageGnbTitle, PageHelmetTitle, PagePath } from '@common';
import { SettingStore } from '@store';

export class SettingHook {
  private static instance = new SettingHook();

  public static getInstance() {
    return this.instance;
  }

  public useChangeTitles(): void {
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
      }

      setSetting((prev) => ({ ...prev, helmetTitle, gnbTitle }));
    }, [location.pathname, setSetting]);
  }
}
