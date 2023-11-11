import { Api } from '@core';

import { ApiResponse } from '@common';

import { AuthResponse, AuthSignInBody, AuthSignUpBody } from './types';

export class AuthApiService extends Api {
  private static instance = new AuthApiService();

  static getInstance(): AuthApiService {
    return this.instance;
  }

  async checkAuth(): Promise<ApiResponse<AuthResponse>> {
    return this.valueFrom<AuthResponse>(this.get('/auth'));
  }

  async signin(body: AuthSignInBody): Promise<ApiResponse<AuthResponse>> {
    return this.valueFrom<AuthResponse>(this.post('/auth/signin', body));
  }

  async signup(body: AuthSignUpBody): Promise<ApiResponse<AuthResponse>> {
    return this.valueFrom<AuthResponse>(this.post('/auth/signup', body));
  }

  async signout(): Promise<ApiResponse<void>> {
    return this.valueFrom<void>(this.post('/auth/signout'));
  }
}
