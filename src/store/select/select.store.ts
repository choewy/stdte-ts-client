import { RecoilStore } from '@core';
import { SELECT_LIST, SELECT_LIST_QUERY } from '@service';

import { SelectStoreProps } from './types';

export class SelectStore extends RecoilStore<SelectStoreProps> {
  constructor() {
    super(SelectStore.name, {
      users: {
        list: SELECT_LIST,
        query: SELECT_LIST_QUERY,
      },
      roles: {
        list: SELECT_LIST,
        query: SELECT_LIST_QUERY,
      },
      category: {
        businesses: {
          list: SELECT_LIST,
          query: SELECT_LIST_QUERY,
        },
        industries: {
          list: SELECT_LIST,
          query: SELECT_LIST_QUERY,
        },
        tasks: {
          list: SELECT_LIST,
          query: SELECT_LIST_QUERY,
        },
      },
    });
  }
}

export const selectStore = new SelectStore();
