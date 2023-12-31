import { HttpService } from '@core';

import { TimeMemoList, TimeMemoListQuery, TimeMemoUpsertBody } from './types';

export class TimeMemoHttpService extends HttpService {
  async getList(query: TimeMemoListQuery) {
    return this.post<TimeMemoList>(this.url(), query);
  }

  async upsertRow(body: TimeMemoUpsertBody) {
    return this.patch<null>(this.url(), body);
  }

  async deleteRow(id: number) {
    return this.delete<null>(this.url(id));
  }
}

export const timeMemoHttpService = new TimeMemoHttpService('record/memo');
