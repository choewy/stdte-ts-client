import { HttpService } from '@core';

import { UserListQuery, UserList, UserRow, UserRowUpdateBody, UserUpdateBody } from './types';

export class UserHttpService extends HttpService {
  async getMyProfile() {
    return this.get<UserRow>(this.url('profile'));
  }

  async existRow(id: number) {
    return this.head<null>(this.url(id));
  }

  async updateMyProfile(body: Partial<UserUpdateBody>) {
    return this.patch<null>(this.url('profile'), body);
  }

  async getList(query: UserListQuery) {
    return this.get<UserList>(this.url(), { params: query, delay: 250 });
  }

  async updateRow(id: number, body: Partial<UserRowUpdateBody>) {
    return this.patch<UserRow>(this.url(id), body, { delay: 250 });
  }
}

export const userHttpService = new UserHttpService('users');
