import { CredentialsStatus } from '@common';

import { CredentialsList, CredentialsListQuery, CredentialsRow, CredentialsStatsRow } from './types';

export const CREDENTIALS_QUERY: CredentialsListQuery = {
  skip: 0,
  take: 20,
  status: CredentialsStatus.Wating,
};

export const CREDENTIALS_ROW: CredentialsRow = {
  id: 0,
  email: '',
  name: '',
  status: CredentialsStatus.Wating,
  createdAt: '',
  updatedAt: '',
};

export const CREDENTIALS_LIST: CredentialsList = {
  total: 0,
  rows: [],
  query: CREDENTIALS_QUERY,
};

export const CREDENTIALS_STATS_ROW: CredentialsStatsRow = {
  count: 0,
  status: CredentialsStatus.Wating,
};
