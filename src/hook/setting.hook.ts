import { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { EnumMapper, PagePath } from '@common';
import { SettingStoreValueGenerator, settingStore } from '@store';

export class SettingHook {
  useChangeTitles(): void {
    const location = useLocation();
    const pathname = location.pathname as PagePath;

    const setSetting = settingStore.useSetState();

    useEffect(() => {
      const title = EnumMapper.getPageTitle(pathname);

      if (title === undefined) {
        return;
      }

      setSetting((prev) => new SettingStoreValueGenerator(prev).setTitles(title).setOpenSideMenu(false));
    }, [pathname, setSetting]);
  }

  useSideMenuCallback(openSideMenu: boolean) {
    const setSettingStore = settingStore.useSetState();

    return useCallback(() => {
      setSettingStore((prev) => new SettingStoreValueGenerator(prev).setOpenSideMenu(openSideMenu));
    }, [setSettingStore]);
  }
}

export const settingHook = new SettingHook();
