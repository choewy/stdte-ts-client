import { RecoilStore } from '@core';

import { AuzhorizeStoreProps } from './types';

export class AuthorizeStore extends RecoilStore<AuzhorizeStoreProps> {
  constructor() {
    super(AuthorizeStore.name, null);
  }
}

export const authorizeStore = new AuthorizeStore();
