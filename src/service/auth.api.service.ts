import { Api } from '@core';

export class AuthApiService extends Api {
  private static instance: AuthApiService;

  public static getInstance() {
    if (!this.instance) {
      this.instance = new AuthApiService();
    }

    return this.instance;
  }
}
