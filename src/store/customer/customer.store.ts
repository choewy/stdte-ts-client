import { RecoilStore } from '@core';

import { CUSTOMER_LIST, CUSTOMER_LIST_QUERY } from '@service';

import { CustomerStoreProps } from './types';

export class CustomerStore extends RecoilStore<CustomerStoreProps> {
  constructor() {
    super(CustomerStore.name, {
      load: true,
      list: CUSTOMER_LIST,
      query: CUSTOMER_LIST_QUERY,
    });
  }
}

export const customerStore = new CustomerStore();
