import { ProjectStatus } from '@common';

import {
  ProjectCreateBody,
  ProjectList,
  ProjectListQuery,
  ProjectRecordCreateBody,
  ProjectRecordList,
  ProjectRecordListQuery,
  ProjectRecordRow,
  ProjectRecordUpdateBody,
  ProjectRow,
  ProjectUpdateBody,
} from './types';
import { ProjectRecordType } from './enums';

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

export const PROJECT_RECORD_ROW: ProjectRecordRow = {
  date: '',
  amount: '',
  description: '',
  createdAt: '',
  updatedAt: '',
};

export const PROJECT_RECEORD_ORDER_LIST_QUERY: ProjectRecordListQuery = {
  type: ProjectRecordType.Order,
  skip: 0,
  take: 20,
};

export const PROJECT_RECORD_ORDER_LIST: ProjectRecordList = {
  total: 0,
  rows: [],
  query: PROJECT_RECEORD_ORDER_LIST_QUERY,
};

export const PROJECT_RECORD_ORDER_CREATE_BODY: ProjectRecordCreateBody = {
  type: ProjectRecordType.Order,
  project: 0,
  date: '',
  amount: '',
  description: '',
};

export const PROJECT_RECEORD_SALE_LIST_QUERY: ProjectRecordListQuery = {
  type: ProjectRecordType.Sale,
  skip: 0,
  take: 20,
};

export const PROJECT_RECORD_SALE_LIST: ProjectRecordList = {
  total: 0,
  rows: [],
  query: PROJECT_RECEORD_SALE_LIST_QUERY,
};

export const PROJECT_RECORD_SALE_CREATE_BODY: ProjectRecordCreateBody = {
  type: ProjectRecordType.Sale,
  project: 0,
  date: '',
  amount: '',
  description: '',
};

export const PROJECT_RECORD_UPDATE_BODY: ProjectRecordUpdateBody = {
  date: '',
  amount: '',
  description: '',
};
