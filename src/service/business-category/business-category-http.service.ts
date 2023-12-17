import { HttpService } from '@core';

import {
  BusinessCategoryCreateBody,
  BusinessCategoryListQuery,
  BusinessCategoryList,
  BusinessCategoryRow,
  BusinessCategoryUpdateBody,
} from './types';

export class BusinessCategoryHttpService extends HttpService {
  async getList(query: BusinessCategoryListQuery) {
    return this.get<BusinessCategoryList>(this.url(), { params: query, delay: 250 });
  }

  async createRow(body: BusinessCategoryCreateBody) {
    return this.post<BusinessCategoryRow>(this.url(), body, { delay: 250 });
  }

  async updateRow(id: number, body: Partial<BusinessCategoryUpdateBody>) {
    return this.patch<BusinessCategoryRow>(this.url(id), body, { delay: 250 });
  }

  async deleteRow(id: number) {
    return this.delete<null>(this.url(id), { delay: 250 });
  }
}

export const businessCategoryHttpService = new BusinessCategoryHttpService('category/business');
