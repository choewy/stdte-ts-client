import { HttpService } from '@core';

import {
  CredentialsListQuery,
  CredentialsList,
  CredentialsStatsRow,
  CredentialsUpdatePasswordByIdBody,
  CredentialsUpdateStatusByIdBody,
  Credentials,
  CredentialsSignInBody,
  CredentialsSignUpBody,
  CredentialsUpdatePasswordBody,
} from './types';

export class CredentialsHttpService extends HttpService {
  async credentials() {
    return this.get<Credentials>(this.url(), { delay: 500 });
  }

  async signin(body: CredentialsSignInBody) {
    return this.post<Credentials>(this.url('signin'), body, { delay: 500 });
  }

  async signup(body: CredentialsSignUpBody) {
    return this.post<Credentials>(this.url('signup'), body, { delay: 500 });
  }

  async signout() {
    return this.post<null>(this.url('signout'), { delay: 500 });
  }

  async updatePassword(body: CredentialsUpdatePasswordBody) {
    return this.patch<null>(this.url('password'), body, { delay: 500 });
  }

  async getStatsRows() {
    return this.get<CredentialsStatsRow[]>(this.url('stats'));
  }

  async getList(query: CredentialsListQuery) {
    return this.get<CredentialsList>(this.url('list'), { params: query, delay: 500 });
  }

  async updatePasswordById(id: number, body: CredentialsUpdatePasswordByIdBody) {
    return this.patch<null>(this.url(id, 'password'), body, { delay: 500 });
  }

  async updateStatusById(id: number, body: CredentialsUpdateStatusByIdBody) {
    return this.patch<null>(this.url(id, 'status'), body, { delay: 500 });
  }
}

export const credentialsHttpService = new CredentialsHttpService('credentials');
