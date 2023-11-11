import { Api } from '@core';

import { ApiResponse } from '@common';

import { AuthCheckResponse, AuthSignInBody } from './types';

export class AuthApiService extends Api {
  private static instance = new AuthApiService();

  static getInstance(): AuthApiService {
    return this.instance;
  }

  async checkAuth(): Promise<ApiResponse<AuthCheckResponse>> {
    return this.valueFrom<AuthCheckResponse>(this.get('/auth'));
  }

  async signin(body: AuthSignInBody): Promise<ApiResponse<void>> {
    return this.valueFrom<void>(this.post('/auth/signin', body));
  }

  async signout(): Promise<ApiResponse<void>> {
    return this.valueFrom<void>(this.post('/auth/signout'));
  }
}
