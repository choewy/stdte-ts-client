import { HttpService } from '@core';

import { RoleCreateBody, RoleListQuery, RoleList, RoleRow, RoleUpdateBody, RoleUpdateUsersBody } from './types';

export class RoleHttpService extends HttpService {
  async getList(query: RoleListQuery) {
    return this.get<RoleList>(this.url(), { params: query, delay: 500 });
  }

  async createRow(body: RoleCreateBody) {
    return this.post<RoleRow>(this.url(), body, { delay: 250 });
  }

  async updateRow(id: number, body: Partial<RoleUpdateBody>) {
    return this.patch<RoleRow>(this.url(id), body, { delay: 250 });
  }

  async updateRowUsers(id: number, body: RoleUpdateUsersBody) {
    return this.put<RoleRow[]>(this.url(id, 'users'), { users: body.map(({ id }) => id) }, { delay: 250 });
  }

  async deleteRow(id: number) {
    return this.delete<null>(this.url(id));
  }
}

export const roleHttpService = new RoleHttpService('roles');
