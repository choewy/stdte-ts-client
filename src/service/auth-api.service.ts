import { Api } from '@core';

import { ApiResponse } from '@common';

import { AuthResponse, AuthSignInBody, AuthSignUpBody, AuthUpdatePasswordBody } from './types';
import { hashService } from './hash.service';

export class AuthApiService extends Api {
  async checkAuth<R = AuthResponse>(): Promise<ApiResponse<R>> {
    return this.valueFrom<R>(this.get('/auth'));
  }

  async updatePassword<R = void>(body: AuthUpdatePasswordBody): Promise<ApiResponse<R>> {
    return this.valueFrom<R>(
      this.patch('/auth', {
        ...body,
        currentPassword: hashService.toHex(body.currentPassword),
        newPassword: hashService.toHex(body.newPassword),
        confirmPassword: hashService.toHex(body.confirmPassword),
      }),
    );
  }

  async signin<R = AuthResponse>(body: AuthSignInBody): Promise<ApiResponse<R>> {
    return this.valueFrom<R>(
      this.post('/auth/signin', {
        ...body,
        password: hashService.toHex(body.password),
      }),
    );
  }

  async signup<R = AuthResponse>(body: AuthSignUpBody): Promise<ApiResponse<R>> {
    return this.valueFrom<R>(
      this.post('/auth/signup', {
        ...body,
        password: hashService.toHex(body.password),
        confirmPassword: hashService.toHex(body.confirmPassword),
      }),
    );
  }

  async signout<R = void>(): Promise<ApiResponse<R>> {
    return this.valueFrom<R>(this.post('/auth/signout'));
  }
}

export const authApiService = new AuthApiService();
