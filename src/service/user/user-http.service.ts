import { HttpService } from '@core';

import { UserResponse, UserUpdateBody } from './types';

export class UserHttpService extends HttpService {
  async getMyProfile() {
    return this.get<UserResponse>(this.url('profile'));
  }

  async updateMyProfile(body: Partial<UserUpdateBody>) {
    return this.patch<null>(this.url('profile'), body);
  }
}

export const userHttpService = new UserHttpService('users');
