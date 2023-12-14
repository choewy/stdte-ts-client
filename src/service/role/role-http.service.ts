import { HttpService } from '@core';

import { RoleAdminListQuery, RoleAdminListResponse } from './types';

export class RoleHttpService extends HttpService {
  async getListByAdmin(query: RoleAdminListQuery) {
    return this.get<RoleAdminListResponse>(this.url(), { params: query, delay: 500 });
  }
}

export const roleHttpService = new RoleHttpService('roles');
