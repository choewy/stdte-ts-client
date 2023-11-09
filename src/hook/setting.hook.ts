import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { PageHelmetTitle, PagePath } from '@common';
import { SettingStore } from '@store';

export class SettingHook {
  private static instance = new SettingHook();

  public static getInstance() {
    return this.instance;
  }

  public useChangeTitle(): void {
    const location = useLocation();
    const setSetting = SettingStore.getInstance().useSetState();

    useEffect(() => {
      let title = '';

      switch (location.pathname) {
        case PagePath.Home:
          title = PageHelmetTitle.Home;
          break;

        case PagePath.SignIn:
          title = PageHelmetTitle.SignIn;
          break;

        case PagePath.SignUp:
          title = PageHelmetTitle.SignUp;
          break;
      }

      setSetting((prev) => ({ ...prev, title }));
    }, [location.pathname, setSetting]);
  }
}
