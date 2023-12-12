import { RecoilStore } from '@core';

import { Credentials } from './types';

export class CredentialsStore extends RecoilStore<Credentials> {
  constructor() {
    super(CredentialsStore.name, null);
  }
}

export const credentialsStore = new CredentialsStore();
