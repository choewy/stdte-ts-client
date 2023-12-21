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
        s: DateTime.local().startOf('week').toSQLDate(),
        e: DateTime.local().endOf('week').toSQLDate(),
        rows: [],
      },
    });
  }
}

export const timeRecordLayoutStore = new TimeRecordLayoutStore();
