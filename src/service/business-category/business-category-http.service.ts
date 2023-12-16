import { HttpService } from '@core';

import { BusinessCategoryListQuery, BusinessCategoryListResponse } from './types';

export class BusinessCategoryHttpService extends HttpService {
  async getList(query: BusinessCategoryListQuery) {
    return this.get<BusinessCategoryListResponse>(this.url(), { params: query, delay: 250 });
  }
}

export const businessCategoryHttpService = new BusinessCategoryHttpService('category/business');
