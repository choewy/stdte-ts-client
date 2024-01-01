import { RecoilStore } from '@core';

import { SettingStoreProps } from './types';

export class SettingStore extends RecoilStore<SettingStoreProps> {
  constructor() {
    super(SettingStore.name, {
      row: { difficultyTooltip: '' },
      dialog: { update: { open: false } },
    });
  }
}

export const settingStore = new SettingStore();
