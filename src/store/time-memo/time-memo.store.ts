import { RecoilStore } from '@core';

import { TimeMemoStoreProps } from './types';

export class TimeMemoStore extends RecoilStore<TimeMemoStoreProps> {
  constructor() {
    super(TimeMemoStore.name, {
      id: 0,
      editable: false,
      rows: [],
    });
  }
}

export const timeMemoStore = new TimeMemoStore();
