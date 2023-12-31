import { DateTime } from 'luxon';

import { RecoilStore } from '@core';

import { TimeLayoutStoreProps } from './types';

export class TimeLayoutStore extends RecoilStore<TimeLayoutStoreProps> {
  constructor() {
    super(TimeLayoutStore.name, {
      id: 0,
      editable: false,
      loadable: false,
      date: {
        s: DateTime.local().minus({ week: 1 }).startOf('week').toSQLDate(),
        e: DateTime.local().plus({ week: 1 }).endOf('week').toSQLDate(),
        rows: [],
      },
      log: { rows: [] },
      project: { rows: [] },
    });
  }
}

export const timeLayoutStore = new TimeLayoutStore();
