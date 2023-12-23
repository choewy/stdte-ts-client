import { DateTime } from 'luxon';

import { RecoilStore } from '@core';
import { TIME_RECORD_LOG_LIST, TIME_RECORD_PROJECT_LIST } from '@service';

import { TimeRecordLayoutStoreProps } from './types';

export class TimeRecordLayoutStore extends RecoilStore<TimeRecordLayoutStoreProps> {
  constructor() {
    super(TimeRecordLayoutStore.name, {
      log: TIME_RECORD_LOG_LIST,
      project: TIME_RECORD_PROJECT_LIST,
      date: {
        s: DateTime.local().minus({ week: 1 }).startOf('week').toSQLDate(),
        e: DateTime.local().plus({ week: 1 }).endOf('week').toSQLDate(),
        rows: [],
      },
    });
  }
}

export const timeRecordLayoutStore = new TimeRecordLayoutStore();
