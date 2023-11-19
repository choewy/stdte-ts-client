import { RecoilStore } from '@core';

import { NotiEventDetail } from '@common';

export class NotiEventsStore extends RecoilStore<NotiEventDetail[]> {
  constructor() {
    super(NotiEventsStore.name, []);
  }
}

export const notiEventsStore = new NotiEventsStore();
