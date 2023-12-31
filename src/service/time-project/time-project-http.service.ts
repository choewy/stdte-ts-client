import { HttpService } from '@core';

import { TimeProjectList } from './types';

export class TimeProjectHttpService extends HttpService {
  async getList() {
    return this.get<TimeProjectList>(this.url());
  }
}

export const timeProjectHttpService = new TimeProjectHttpService('record/project');
