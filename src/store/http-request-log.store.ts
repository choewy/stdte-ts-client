import { RecoilStore } from '@core';

import { HttpRequestLogStoreValue } from './types';
import { HttpRequestLogStoreValueGenerator } from './generators';

export class HttpRequestLogStore extends RecoilStore<HttpRequestLogStoreValue> {
  constructor() {
    super(HttpRequestLogStore.name, new HttpRequestLogStoreValueGenerator());
  }
}

export const httpRequestLogStore = new HttpRequestLogStore();
