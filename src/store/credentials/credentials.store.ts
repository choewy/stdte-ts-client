import { RecoilStore } from '@core';
import { CREDENTIALS_LIST, CREDENTIALS_LIST_QUERY } from '@service';

import { CredentialsStoreProps } from './types';

export class CredentialsStore extends RecoilStore<CredentialsStoreProps> {
  constructor() {
    super(CredentialsStore.name, {
      load: true,
      list: CREDENTIALS_LIST,
      query: CREDENTIALS_LIST_QUERY,
      stats: [],
    });
  }
}

export const credentialsStore = new CredentialsStore();
