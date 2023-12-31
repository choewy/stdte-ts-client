import { RecoilStore } from '@core';

import { TimeMemoStoreProps } from './types';

export class TimeMemoStore extends RecoilStore<TimeMemoStoreProps> {
  constructor() {
    super(TimeMemoStore.name, {
      rows: [],
      dialog: {
        upsert: { open: false, row: { id: 0, date: '', text: '', updatedAt: '' } },
        delete: { open: false, row: { id: 0, date: '', text: '', updatedAt: '' } },
      },
    });
  }
}

export const timeMemoStore = new TimeMemoStore();
