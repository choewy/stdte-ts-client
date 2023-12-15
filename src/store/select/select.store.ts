import { RecoilStore } from '@core';

import { SelectStoreProps } from './types';
import { SELECT_STORE_DEFALUT_QUERY, SELECT_STORE_DEFALUT_LIST } from './constants';

export class SelectStore extends RecoilStore<SelectStoreProps> {
  constructor() {
    super(SelectStore.name, {
      users: {
        list: SELECT_STORE_DEFALUT_LIST,
        query: SELECT_STORE_DEFALUT_QUERY,
      },
      roles: {
        list: SELECT_STORE_DEFALUT_LIST,
        query: SELECT_STORE_DEFALUT_QUERY,
      },
      category: {
        businesses: {
          list: SELECT_STORE_DEFALUT_LIST,
          query: SELECT_STORE_DEFALUT_QUERY,
        },
        industries: {
          list: SELECT_STORE_DEFALUT_LIST,
          query: SELECT_STORE_DEFALUT_QUERY,
        },
        tasks: {
          list: SELECT_STORE_DEFALUT_LIST,
          query: SELECT_STORE_DEFALUT_QUERY,
        },
      },
    });
  }
}

export const selectStore = new SelectStore();
