import { HttpService } from '@core';

import {
  RoleAdminCreateBody,
  RoleAdminListQuery,
  RoleAdminListResponse,
  RoleAdminRowResponse,
  RoleAdminUpdateBody,
  RoleAdminUpdateUsersBody,
} from './types';

export class RoleHttpService extends HttpService {
  async getListByAdmin(query: RoleAdminListQuery) {
    return this.get<RoleAdminListResponse>(this.url(), { params: query, delay: 500 });
  }

  async createRole(body: RoleAdminCreateBody) {
    return this.post<RoleAdminRowResponse>(this.url(), body, { delay: 250 });
  }

  async updateRole(id: number, body: Partial<RoleAdminUpdateBody>) {
    return this.patch<RoleAdminRowResponse>(this.url(id), body, { delay: 250 });
  }

  async updateRoleUsers(id: number, body: Partial<RoleAdminUpdateUsersBody>) {
    return this.put<RoleAdminRowResponse[]>(this.url(id, 'users'), body, { delay: 250 });
  }

  async deleteRole(id: number) {
    return this.delete<null>(this.url(id));
  }
}

export const roleHttpService = new RoleHttpService('roles');
