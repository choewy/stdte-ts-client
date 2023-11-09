import { AuthCheckResponseDto } from '@common';
import { Api } from '@core';

export class AuthApiService extends Api {
  private static instance = new AuthApiService();

  static getInstance() {
    return this.instance;
  }

  async checkAuth() {
    return this.transform<AuthCheckResponseDto, null>(this.get('/auth'));
  }
}
