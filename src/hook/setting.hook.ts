import { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { PAGE_NAMES, PagePath } from '@common';
import { SettingStore } from '@store';

export class SettingHook {
  private static instance = new SettingHook();

  public static getInstance() {
    return this.instance;
  }

  useChangeTitles(): void {
    const location = useLocation();
    const pathname = location.pathname as PagePath;

    const setSetting = SettingStore.getInstance().useSetState();

    useEffect(() => {
      const title = PAGE_NAMES[pathname];

      if (title === undefined) {
        return;
      }

      setSetting((prev) => ({
        ...prev,
        helmetTitle: title,
        gnbTitle: title,
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
