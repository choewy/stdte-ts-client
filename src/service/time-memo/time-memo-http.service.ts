import { HttpService } from '@core';

import { TimeMemoList, TimeMemoListQuery } from './types';

export class TimeMemoHttpService extends HttpService {
  async getList(query: TimeMemoListQuery) {
    return this.post<TimeMemoList>(this.url(), query, { delay: 250 });
  }
}

export const timeMemoHttpService = new TimeMemoHttpService('record/memo');
