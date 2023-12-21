import { HttpService } from '@core';

import {
  TimeRecordUpsertBody,
  TimeRecordList,
  TimeRecordListQuery,
  TimeRecordLogList,
  TimeRecordProjectList,
  TimeRecordOne,
} from './types';

export class TimeRecordHttpService extends HttpService {
  async getLogList() {
    return this.get<TimeRecordLogList>(this.url('log'));
  }

  async getProjectList() {
    return this.get<TimeRecordProjectList>(this.url('project'));
  }

  async getTimeList(query: TimeRecordListQuery) {
    return this.post<TimeRecordList>(this.url('time'), query, { delay: 250 });
  }

  async upsertTime(body: TimeRecordUpsertBody) {
    return this.patch<TimeRecordOne>(this.url('time'), body, { delay: 250 });
  }

  async deleteTime(id: number) {
    return this.delete<null>(this.url('time', id), { delay: 250 });
  }
}

export const timeRecordHttpService = new TimeRecordHttpService('record');
