import { RecoilStore } from '@core';

import { RoleStoreValue } from './types';
import { RoleStoreValueGenerator } from './generators';

export class RoleStore extends RecoilStore<RoleStoreValue> {
  constructor() {
    super(RoleStore.name, new RoleStoreValueGenerator());
  }
}

export const roleStore = new RoleStore();
