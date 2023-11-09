import { RecoilStore } from '@core';
import { SettingStoreDto } from '@common';

export class SettingStore extends RecoilStore<SettingStoreDto> {
  private static instance = new SettingStore(SettingStore.name, new SettingStoreDto());

  public static getInstance() {
    return this.instance;
  }
}
