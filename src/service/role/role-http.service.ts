import { HttpService } from '@core';

import { RoleAdminCreateBody, RoleAdminListQuery, RoleAdminListResponse } from './types';

export class RoleHttpService extends HttpService {
  async getListByAdmin(query: RoleAdminListQuery) {
    return this.get<RoleAdminListResponse>(this.url(), { params: query, delay: 500 });
  }

  async createRole(body: RoleAdminCreateBody) {
    return this.post<{ id: number }>(this.url(), body, { delay: 250 });
  }

  async deleteRole(id: number) {
    return this.delete<null>(this.url(id));
  }
}

export const roleHttpService = new RoleHttpService('roles');
