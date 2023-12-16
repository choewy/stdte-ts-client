import { RecoilStore } from '@core';

import { UserStoreProps } from './types';
import { USER_STORE_DEFAULT_LIST, USER_STORE_DEFAULT_QUERY } from './constants';

export class UserStore extends RecoilStore<UserStoreProps> {
  constructor() {
    super(UserStore.name, {
      query: USER_STORE_DEFAULT_QUERY,
      list: USER_STORE_DEFAULT_LIST,
    });
  }
}

export const userStore = new UserStore();
