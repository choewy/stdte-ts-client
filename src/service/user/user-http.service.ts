import { HttpService } from '@core';

import { UserListQuery, UserListResponse, UserResponse, UserUpdateBody } from './types';

export class UserHttpService extends HttpService {
  async getMyProfile() {
    return this.get<UserResponse>(this.url('profile'));
  }

  async updateMyProfile(body: Partial<UserUpdateBody>) {
    return this.patch<null>(this.url('profile'), body);
  }

  async getList(query: UserListQuery) {
    return this.get<UserListResponse>(this.url(), { params: query, delay: 250 });
  }
}

export const userHttpService = new UserHttpService('users');
