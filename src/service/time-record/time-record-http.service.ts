import { HttpService } from '@core';

import { TimeRecordUpsertBody, TimeRecordList, TimeRecordListQuery, TimeRecordOne } from './types';

export class TimeRecordHttpService extends HttpService {
  async getList(query: TimeRecordListQuery) {
    return this.post<TimeRecordList>(this.url(), query, { delay: 250 });
  }

  async upsertRow(body: TimeRecordUpsertBody) {
    return this.patch<TimeRecordOne>(this.url(), body, { delay: 250 });
  }
}

export const timeRecordHttpService = new TimeRecordHttpService('record/time');
