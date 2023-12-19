import { CredentialsStatus, UserStatus } from '@common';

import { UserRowCredentials, UserList, UserListQuery, UserRow } from './types';

export const USER_ROW_CREDENTIALS: UserRowCredentials = {
  email: '',
  status: CredentialsStatus.Wating,
};

export const USER_ROW: UserRow = {
  id: 0,
  name: '',
  phone: '',
  birthday: '',
  scienceNumber: '',
  degree: '',
  school: '',
  major: '',
  carType: '',
  carNumber: '',
  enteringDay: '',
  resignationDay: '',
  status: UserStatus.Wating,
  credentials: USER_ROW_CREDENTIALS,
  role: null,
  createdAt: '',
  updatedAt: '',
};

export const USER_LIST_QUERY: UserListQuery = {
  skip: 0,
  take: 20,
};

export const USER_LIST: UserList = {
  total: 0,
  rows: [],
  query: USER_LIST_QUERY,
};
