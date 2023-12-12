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
    return this.get<CredentialsResponse>(this.url(), { delay: 500 });
  }

  async signin(body: CredentialsSignInBody) {
    return this.post<CredentialsResponse>(this.url('signin'), body, { delay: 500 });
  }

  async signup(body: CredentialsSignUpBody) {
    return this.post<CredentialsResponse>(this.url('signup'), body, { delay: 500 });
  }

  async signout() {
    return this.post<null>(this.url('signout'), { delay: 500 });
  }

  async updatePassword(body: CredentialsUpdatePasswordBody) {
    return this.patch<null>(this.url('password'), body, { delay: 500 });
  }

  async updatePasswordByAdmin(id: number, body: CredentialsAdminUpdatePasswordBody) {
    return this.patch<null>(this.url(id, 'password'), body, { delay: 500 });
  }

  async updateStatusByAdmin(id: number, body: CredentialsAdminUpdateStatusBody) {
    return this.patch<null>(this.url(id, 'status'), body, { delay: 500 });
  }
}

export const credentialsHttpService = new CredentialsHttpService('credentials');
