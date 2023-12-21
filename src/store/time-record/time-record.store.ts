import { RecoilStore } from '@core';

import { TimeRecordStoreProps } from './types';

export class TimeRecordStore extends RecoilStore<TimeRecordStoreProps> {
  constructor() {
    super(TimeRecordStore.name, {
      id: 0,
      load: false,
      editable: false,
      sums: [],
      rows: [],
    });
  }
}

export const timeRecordStore = new TimeRecordStore();
