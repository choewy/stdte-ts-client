import { Api } from '@core';
import { ApiResponse, Profile } from '@common';

export class ProfileApiService extends Api {
  async getMyProfile<R = Profile>(): Promise<ApiResponse<R>> {
    return this.valueFrom<R>(this.get('/profile'));
  }

  async updateMyProfile(body: object) {
    return this.valueFrom(this.patch('/profile', body));
  }
}

export const profileApiService = new ProfileApiService();
