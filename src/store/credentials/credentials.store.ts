import { RecoilStore } from '@core';

import { CredentialsStoreProps } from './types';

export class CredentialsStore extends RecoilStore<CredentialsStoreProps> {
  constructor() {
    super(CredentialsStore.name, null);
  }
}

export const credentialsStore = new CredentialsStore();
