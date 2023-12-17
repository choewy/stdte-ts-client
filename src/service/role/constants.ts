import { RolePolicyLevel, RolePolicyProperty } from '@common';

import { RoleList, RoleListQuery, RoleRow, RoleRowUser } from './types';

export const ROLE_ROW_USER: RoleRowUser = {
  id: 0,
  name: '',
};

export const ROLE_ROW_POLICY: RolePolicyProperty = {
  roleAndPolicy: RolePolicyLevel.Limit,
  credentials: RolePolicyLevel.Limit,
  user: RolePolicyLevel.Limit,
  project: RolePolicyLevel.Limit,
  customer: RolePolicyLevel.Limit,
  businessCategory: RolePolicyLevel.Limit,
  industryCategory: RolePolicyLevel.Limit,
  taskCategory: RolePolicyLevel.Limit,
  setting: RolePolicyLevel.Limit,
};

export const ROLE_ROW: RoleRow = {
  id: 0,
  name: '',
  users: [],
  rolePolicy: ROLE_ROW_POLICY,
  createdAt: '',
  updatedAt: '',
};

export const ROLE_QUERY: RoleListQuery = {
  skip: 0,
  take: 0,
};

export const ROLE_LIST: RoleList = {
  total: 0,
  rows: [],
  query: ROLE_QUERY,
};
