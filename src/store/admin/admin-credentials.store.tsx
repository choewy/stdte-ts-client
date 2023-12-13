import { RecoilStore } from '@core';
import { CredentialsStatus } from '@common';

import { AdminCredentialsStoreProps } from './types';

export class AdminCredentialsStore extends RecoilStore<AdminCredentialsStoreProps> {
  constructor() {
    super(AdminCredentialsStore.name, {
      stats: [],
      list: {
        total: 0,
        rows: [],
        query: {
          status: CredentialsStatus.Wating,
          skip: 0,
          take: 20,
        },
      },
      query: {
        status: CredentialsStatus.Wating,
        skip: 0,
        take: 20,
      },
    });
  }
}

export const adminCredentialsStore = new AdminCredentialsStore();
