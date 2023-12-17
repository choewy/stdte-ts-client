import { HttpService } from '@core';

import { SelectList, SelectListQuery } from './types';

export class SelectHttpService extends HttpService {
  async getUserList(query: SelectListQuery) {
    return this.get<SelectList>(this.url('users'), {
      params: query,
      delay: 250,
    });
  }

  async getRoleList(query: SelectListQuery) {
    return this.get<SelectList>(this.url('roles'), {
      params: query,
      delay: 250,
    });
  }

  async getCustomerList(query: SelectListQuery) {
    return this.get<SelectList>(this.url('customers'), {
      params: query,
      delay: 250,
    });
  }

  async getBusinessCategoryList(query: SelectListQuery) {
    return this.get<SelectList>(this.url('category/businesses'), {
      params: query,
      delay: 250,
    });
  }

  async getIndustryCategoryList(query: SelectListQuery) {
    return this.get<SelectList>(this.url('category/industries'), {
      params: query,
      delay: 250,
    });
  }

  async getTaskCategoryList(query: SelectListQuery) {
    return this.get<SelectList>(this.url('category/tasks'), {
      params: query,
      delay: 250,
    });
  }
}

export const selectHttpService = new SelectHttpService('select');
