import { HttpService } from '@core';

import { SelectList, SelectListQuery } from './types';

export class SelectHttpService extends HttpService {
  async getUsers(query: SelectListQuery) {
    return this.get<SelectList>(this.url('users'), {
      params: query,
      delay: 250,
    });
  }

  async getRoles(query: SelectListQuery) {
    return this.get<SelectList>(this.url('roles'), {
      params: query,
      delay: 250,
    });
  }

  async getBusinessCategories(query: SelectListQuery) {
    return this.get<SelectList>(this.url('category/businesses'), {
      params: query,
      delay: 250,
    });
  }

  async getIndustryCategories(query: SelectListQuery) {
    return this.get<SelectList>(this.url('category/industries'), {
      params: query,
      delay: 250,
    });
  }

  async getTaskCategories(query: SelectListQuery) {
    return this.get<SelectList>(this.url('category/tasks'), {
      params: query,
      delay: 250,
    });
  }
}

export const selectHttpService = new SelectHttpService('select');
