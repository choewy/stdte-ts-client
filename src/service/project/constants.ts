import { ProjectStatus } from '@common';

import {
  ProjectCreateBody,
  ProjectList,
  ProjectListQuery,
  ProjectRow,
  ProjectRowOrderRecord,
  ProjectRowSaleRecord,
  ProjectUpdateBody,
} from './types';

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
  months: 0,
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
  canExpose: true,
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

export const PROJECT_CREATE_BODY: ProjectCreateBody = {
  name: '',
  code: '',
  description: '',
  difficulty: '1.0',
  amount: '0',
  status: ProjectStatus.Wating,
  startDate: '',
  endDate: '',
  customer: 0,
  businessCategory: 0,
  industryCategory: 0,
  taskCategory: 0,
  internalOwners: [],
  internalManagers: [],
  internalLeaders: [],
  externalOwners: [],
  externalManagers: [],
  externalLeaders: [],
  canExpose: true,
};

export const PROJECT_UPDATE_BODY: ProjectUpdateBody = {
  name: '',
  code: '',
  description: '',
  difficulty: '1.0',
  amount: '0',
  status: ProjectStatus.Wating,
  startDate: '',
  endDate: '',
  customer: 0,
  businessCategory: 0,
  industryCategory: 0,
  taskCategory: 0,
  internalOwners: [],
  internalManagers: [],
  internalLeaders: [],
  externalOwners: [],
  externalManagers: [],
  externalLeaders: [],
  canExpose: true,
};
