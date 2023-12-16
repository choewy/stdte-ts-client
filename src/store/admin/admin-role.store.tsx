import { RecoilStore } from '@core';

import { AdminRoleStoreProps } from './types';

export class AdminRoleStore extends RecoilStore<AdminRoleStoreProps> {
  constructor() {
    super(AdminRoleStore.name, {
      load: true,
      list: {
        total: 0,
        rows: [],
        query: { skip: 0, take: 0 },
      },
      query: { skip: 0, take: 20 },
    });
  }
}

export const adminRoleStore = new AdminRoleStore();
