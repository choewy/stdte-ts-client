import { HttpService } from '@core';

import { TimeLogList } from './types';

export class TimeLogHttpService extends HttpService {
  async getList() {
    return this.get<TimeLogList>(this.url());
  }
}

export const timeLogHttpService = new TimeLogHttpService('record/log');
