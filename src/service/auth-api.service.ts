import { Api } from '@core';

import { ApiResponse } from '@common';

import { AuthResponse, AuthSignInBody, AuthSignUpBody, AuthUpdatePasswordBody } from './types';
import { hashService } from './hash.service';

export class AuthApiService extends Api {
  async checkAuth(): Promise<ApiResponse<AuthResponse>> {
    return this.valueFrom<AuthResponse>(this.get('/auth'));
  }

  async updatePassword(body: AuthUpdatePasswordBody): Promise<ApiResponse<void>> {
    body.currentPassword = hashService.toHex(body.currentPassword);
    body.newPassword = hashService.toHex(body.newPassword);
    body.confirmPassword = hashService.toHex(body.confirmPassword);

    return this.valueFrom<void>(this.patch('/auth', body));
  }

  async signin(body: AuthSignInBody): Promise<ApiResponse<AuthResponse>> {
    body.password = hashService.toHex(body.password);

    return this.valueFrom<AuthResponse>(this.post('/auth/signin', body));
  }

  async signup(body: AuthSignUpBody): Promise<ApiResponse<AuthResponse>> {
    body.password = hashService.toHex(body.password);
    body.confirmPassword = hashService.toHex(body.confirmPassword);

    return this.valueFrom<AuthResponse>(this.post('/auth/signup', body));
  }

  async signout(): Promise<ApiResponse<void>> {
    return this.valueFrom<void>(this.post('/auth/signout'));
  }
}

export const authApiService = new AuthApiService();
