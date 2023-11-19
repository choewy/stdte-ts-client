import { RecoilStore } from '@core';

import { SettingStoreValue } from './types';
import { SettingStoreValueGenerator } from './generators';

export class SettingStore extends RecoilStore<SettingStoreValue> {
  constructor() {
    super(SettingStore.name, new SettingStoreValueGenerator());
  }
}

export const settingStore = new SettingStore();
