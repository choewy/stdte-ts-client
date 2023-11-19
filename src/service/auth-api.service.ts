import { Api } from '@core';

import { ApiResponse } from '@common';

import { AuthResponse, AuthSignInBody, AuthSignUpBody, AuthUpdatePasswordBody } from './types';
import { hashService } from './hash.service';

export class AuthApiService extends Api {
  async checkAuth(): Promise<ApiResponse<AuthResponse>> {
    return this.valueFrom<AuthResponse>(this.get('/auth'));
  }

  async updatePassword(body: AuthUpdatePasswordBody): Promise<ApiResponse<void>> {
    return this.valueFrom<void>(
      this.patch('/auth', {
        ...body,
        currentPassword: hashService.toHex(body.currentPassword),
        newPassword: hashService.toHex(body.newPassword),
        confirmPassword: hashService.toHex(body.confirmPassword),
      }),
    );
  }

  async signin(body: AuthSignInBody): Promise<ApiResponse<AuthResponse>> {
    return this.valueFrom<AuthResponse>(
      this.post('/auth/signin', {
        ...body,
        password: hashService.toHex(body.password),
      }),
    );
  }

  async signup(body: AuthSignUpBody): Promise<ApiResponse<AuthResponse>> {
    return this.valueFrom<AuthResponse>(
      this.post('/auth/signup', {
        ...body,
        password: hashService.toHex(body.password),
        confirmPassword: hashService.toHex(body.confirmPassword),
      }),
    );
  }

  async signout(): Promise<ApiResponse<void>> {
    return this.valueFrom<void>(this.post('/auth/signout'));
  }
}

export const authApiService = new AuthApiService();
