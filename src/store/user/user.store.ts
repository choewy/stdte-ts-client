import { RecoilStore } from '@core';
import { USER_LIST, USER_LIST_QUERY } from '@service';

import { UserStoreProps } from './types';

export class UserStore extends RecoilStore<UserStoreProps> {
  constructor() {
    super(UserStore.name, {
      list: USER_LIST,
      query: USER_LIST_QUERY,
    });
  }
}

export const userStore = new UserStore();
