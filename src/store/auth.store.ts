import { RecoilStore } from '@core';

import { AuthStoreValue } from './types';

export class AuthStore extends RecoilStore<AuthStoreValue> {
  private static instance = new AuthStore(AuthStore.name, {
    ok: null,
    auth: null,
    role: null,
  });

  public static getInstance() {
    return this.instance;
  }
}
