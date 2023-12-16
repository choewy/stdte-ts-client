import { UserListQuery, UserListResponse } from '@service';

export const USER_STORE_DEFAULT_QUERY: UserListQuery = {
  skip: 0,
  take: 20,
};

export const USER_STORE_DEFAULT_LIST: UserListResponse = {
  total: 0,
  rows: [],
  query: USER_STORE_DEFAULT_QUERY,
};
