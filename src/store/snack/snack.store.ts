import { RecoilStore } from '@core';

import { SnackStoreProps } from './types';

export class SnackStore extends RecoilStore<SnackStoreProps> {
  constructor() {
    super(SnackStore.name, []);
  }
}

export const snackStore = new SnackStore();
