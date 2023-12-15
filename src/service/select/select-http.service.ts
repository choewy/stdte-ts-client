import { HttpClientListQuery, HttpService } from '@core';

import { SelectResponse } from './types';

export class SelectHttpService extends HttpService {
  async getUsers(query: HttpClientListQuery) {
    return this.get<SelectResponse<number>>(this.url('users'), { params: query, delay: 250 });
  }

  async getRoles(query: HttpClientListQuery) {
    return this.get<SelectResponse<number>>(this.url('roles'), { params: query, delay: 250 });
  }

  async getBusinessCategories(query: HttpClientListQuery) {
    return this.get<SelectResponse<number>>(this.url('category/businesses'), { params: query, delay: 250 });
  }

  async getIndustryCategories(query: HttpClientListQuery) {
    return this.get<SelectResponse<number>>(this.url('category/industries'), { params: query, delay: 250 });
  }
}

export const selectHttpService = new SelectHttpService('select');
