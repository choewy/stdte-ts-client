import { HttpService } from '@core';

import {
  CredentialsAdminUpdatePasswordBody,
  CredentialsAdminUpdateStatusBody,
  CredentialsResponse,
  CredentialsSignInBody,
  CredentialsSignUpBody,
  CredentialsUpdatePasswordBody,
} from './types';

export class CredentialsHttpService extends HttpService {
  async credentials() {
    return this.get<CredentialsResponse>(this.url());
  }

  async signin(body: CredentialsSignInBody) {
    return this.post<null>(this.url('signin'), body);
  }

  async signup(body: CredentialsSignUpBody) {
    return this.post<null>(this.url('signup'), body);
  }

  async signout() {
    return this.post<null>(this.url('signout'));
  }

  async updatePassword(body: CredentialsUpdatePasswordBody) {
    return this.patch<null>(this.url('password'), body);
  }

  async updatePasswordByAdmin(id: number, body: CredentialsAdminUpdatePasswordBody) {
    return this.patch<null>(this.url(id, 'password'), body);
  }

  async updateStatusByAdmin(id: number, body: CredentialsAdminUpdateStatusBody) {
    return this.patch<null>(this.url(id, 'status'), body);
  }
}

export const credentialsHttpService = new CredentialsHttpService('credentials');
