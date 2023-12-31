import { RecoilStore } from '@core';

import { TimeRecordStoreProps } from './types';

export class TimeRecordStore extends RecoilStore<TimeRecordStoreProps> {
  constructor() {
    super(TimeRecordStore.name, {
      sums: [],
      rows: [],
    });
  }
}

export const timeRecordStore = new TimeRecordStore();
