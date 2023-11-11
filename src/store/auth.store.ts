import { RecoilStore } from '@core';

import { AuthStoreValue } from './types';

export const authStoreDefaultValue: AuthStoreValue = {
  ok: null,
  auth: null,
  role: null,
  authStatus: 0,
  employmentStatus: 0,
};

export class AuthStore extends RecoilStore<AuthStoreValue> {
  private static instance = new AuthStore(AuthStore.name, authStoreDefaultValue);

  public static getInstance() {
    return this.instance;
  }
}
