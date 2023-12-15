import { HttpClientListQuery, HttpService } from '@core';

import { SelectListResponse } from './types';

export class SelectHttpService extends HttpService {
  async getUsers(query: HttpClientListQuery) {
    return this.get<SelectListResponse>(this.url('users'), {
      params: query,
      delay: 250,
    });
  }

  async getRoles(query: HttpClientListQuery) {
    return this.get<SelectListResponse>(this.url('roles'), {
      params: query,
      delay: 250,
    });
  }

  async getBusinessCategories(query: HttpClientListQuery) {
    return this.get<SelectListResponse>(this.url('category/businesses'), {
      params: query,
      delay: 250,
    });
  }

  async getIndustryCategories(query: HttpClientListQuery) {
    return this.get<SelectListResponse>(this.url('category/industries'), {
      params: query,
      delay: 250,
    });
  }

  async getTaskCategories(query: HttpClientListQuery) {
    return this.get<SelectListResponse>(this.url('category/tasks'), {
      params: query,
      delay: 250,
    });
  }
}

export const selectHttpService = new SelectHttpService('select');
