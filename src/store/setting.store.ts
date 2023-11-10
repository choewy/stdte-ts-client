import { RecoilStore } from '@core';

import { SettingStoreValue } from './types';

export class SettingStore extends RecoilStore<SettingStoreValue> {
  private static instance = new SettingStore(SettingStore.name, {
    title: '',
    themeColor: '#A00',
  });

  public static getInstance() {
    return this.instance;
  }
}
