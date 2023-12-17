import { ProjectStatus } from '@common';

import { ProjectList, ProjectListQuery, ProjectRow, ProjectRowOrderRecord, ProjectRowSaleRecord } from './types';

export const PROJECT_ORDER_RECORD: ProjectRowOrderRecord = {
  date: '',
  amount: '',
  createdAt: '',
  updatedAt: '',
};

export const PROJECT_SALE_RECORD: ProjectRowSaleRecord = {
  date: '',
  amount: '',
  createdAt: '',
  updatedAt: '',
};

export const PROJECT_ROW: ProjectRow = {
  id: 0,
  name: '',
  code: '',
  description: '',
  difficulty: '',
  amount: '',
  status: ProjectStatus.Wating,
  startDate: '',
  endDate: '',
  keepDate: '',
  orderRecord: PROJECT_ORDER_RECORD,
  saleRecord: PROJECT_SALE_RECORD,
  businessCategory: null,
  industryCategory: null,
  taskCategory: null,
  customer: null,
  internalOwners: [],
  internalManagers: [],
  internalLeaders: [],
  externalOwners: [],
  externalManagers: [],
  externalLeaders: [],
  createdAt: '',
  updatedAt: '',
};

export const PROJECT_LIST_QUERY: ProjectListQuery = {
  skip: 0,
  take: 20,
};

export const PROJECT_LIST: ProjectList = {
  total: 0,
  rows: [],
  query: PROJECT_LIST_QUERY,
};
