import { Api } from '@core';

import { ApiResponse } from '@common';

import { AuthResponse, AuthSignInBody, AuthSignUpBody, AuthUpdatePasswordBody } from './types';
import { HashService } from './hash.service';

export class AuthApiService extends Api {
  private static instance = new AuthApiService();

  static getInstance(): AuthApiService {
    return this.instance;
  }

  async checkAuth(): Promise<ApiResponse<AuthResponse>> {
    return this.valueFrom<AuthResponse>(this.get('/auth'));
  }

  async updatePassword(body: AuthUpdatePasswordBody): Promise<ApiResponse<void>> {
    body.currentPassword = HashService.getInstance().toBase64(body.currentPassword);
    body.newPassword = HashService.getInstance().toBase64(body.newPassword);
    body.confirmPassword = HashService.getInstance().toBase64(body.confirmPassword);

    return this.valueFrom<void>(this.patch('/auth', body));
  }

  async signin(body: AuthSignInBody): Promise<ApiResponse<AuthResponse>> {
    body.password = HashService.getInstance().toBase64(body.password);

    return this.valueFrom<AuthResponse>(this.post('/auth/signin', body));
  }

  async signup(body: AuthSignUpBody): Promise<ApiResponse<AuthResponse>> {
    body.password = HashService.getInstance().toBase64(body.password);
    body.confirmPassword = HashService.getInstance().toBase64(body.confirmPassword);

    return this.valueFrom<AuthResponse>(this.post('/auth/signup', body));
  }

  async signout(): Promise<ApiResponse<void>> {
    return this.valueFrom<void>(this.post('/auth/signout'));
  }
}
