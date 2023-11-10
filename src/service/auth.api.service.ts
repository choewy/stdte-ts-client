import { Api } from '@core';

import { AuthCheckResponse } from './types';

export class AuthApiService extends Api {
  private static instance = new AuthApiService();

  static getInstance() {
    return this.instance;
  }

  async checkAuth() {
    return this.valueFrom<AuthCheckResponse>(this.get('/auth'));
  }
}
