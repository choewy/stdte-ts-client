import { RecoilStore } from '@core';

import { SettingStoreValue } from './types';

export class SettingStore extends RecoilStore<SettingStoreValue> {
  private static instance = new SettingStore(SettingStore.name, {
    helmetTitle: '',
    themeColor: '#A00',
    gnbTitle: '',
    openSideMenu: false,
  });

  public static getInstance() {
    return this.instance;
  }
}
