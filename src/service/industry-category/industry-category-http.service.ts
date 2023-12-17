import { HttpService } from '@core';

import {
  IndustryCategoryCreateBody,
  IndustryCategoryListQuery,
  IndustryCategoryList,
  IndustryCategoryRow,
  IndustryCategoryUpdateBody,
} from './types';

export class IndustryCategoryHttpService extends HttpService {
  async getList(query: IndustryCategoryListQuery) {
    return this.get<IndustryCategoryList>(this.url(), { params: query, delay: 250 });
  }

  async createRow(body: IndustryCategoryCreateBody) {
    return this.post<IndustryCategoryRow>(this.url(), body, { delay: 250 });
  }

  async updateRow(id: number, body: Partial<IndustryCategoryUpdateBody>) {
    return this.patch<IndustryCategoryRow>(this.url(id), body, { delay: 250 });
  }

  async deleteRow(id: number) {
    return this.delete<null>(this.url(id), { delay: 250 });
  }
}

export const industryCategoryHttpService = new IndustryCategoryHttpService('category/Industry');
