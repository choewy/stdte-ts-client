import { RecoilStore } from '@core';

import { NotiEventDetail } from '@common';

export class NotiStore extends RecoilStore<NotiEventDetail[]> {
  private static instance = new NotiStore(NotiStore.name, []);

  public static getInstance() {
    return this.instance;
  }
}
