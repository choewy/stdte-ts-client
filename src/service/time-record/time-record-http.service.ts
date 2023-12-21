import { HttpService } from '@core';

import { TimeRecordLogList, TimeRecordProjectList } from './types';

export class TimeRecordHttpService extends HttpService {
  async getLogList() {
    return this.get<TimeRecordLogList>(this.url('log'));
  }

  async getProjectList() {
    return this.get<TimeRecordProjectList>(this.url('project'));
  }
}

export const timeRecordHttpService = new TimeRecordHttpService('record');
