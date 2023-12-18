import { RecoilStore } from '@core';
import { SELECT_LIST_ALL, SELECT_LIST_ALL_QUERY } from '@service';

import { SelectStoreProps } from './types';

export class SelectStore extends RecoilStore<SelectStoreProps> {
  constructor() {
    super(SelectStore.name, {
      users: {
        list: SELECT_LIST_ALL,
        query: SELECT_LIST_ALL_QUERY,
      },
      roles: {
        list: SELECT_LIST_ALL,
        query: SELECT_LIST_ALL_QUERY,
      },
      customers: {
        list: SELECT_LIST_ALL,
        query: SELECT_LIST_ALL_QUERY,
      },
      category: {
        businesses: {
          list: SELECT_LIST_ALL,
          query: SELECT_LIST_ALL_QUERY,
        },
        industries: {
          list: SELECT_LIST_ALL,
          query: SELECT_LIST_ALL_QUERY,
        },
        tasks: {
          list: SELECT_LIST_ALL,
          query: SELECT_LIST_ALL_QUERY,
        },
      },
    });
  }
}

export const selectStore = new SelectStore();
