import { RecoilStore } from '@core';

import { SignStoreValue } from './types';
import { SignStoreValueGenerator } from './generators';

export class SignStore extends RecoilStore<SignStoreValue> {
  constructor() {
    super(SignStore.name, new SignStoreValueGenerator());
  }
}

export const signStore = new SignStore();
