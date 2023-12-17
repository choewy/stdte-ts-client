import { RecoilStore } from '@core';
import { ROLE_LIST, ROLE_QUERY } from '@service';

import { RoleStoreProps } from './types';

export class RoleStore extends RecoilStore<RoleStoreProps> {
  constructor() {
    super(RoleStore.name, {
      load: true,
      list: ROLE_LIST,
      query: ROLE_QUERY,
    });
  }
}

export const roleStore = new RoleStore();
