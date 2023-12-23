import { RolePolicyProperty } from '@common';
import { HttpClientListQuery, HttpClientListResponse } from '@core';

export type RoleRowUser = {
  id: number;
  name: string;
};

export type RoleRow = {
  id: number;
  name: string;
  users: RoleRowUser[];
  rolePolicy: RolePolicyProperty;
  isReadonly: boolean;
  createdAt: string;
  updatedAt: string;
};

export type RoleListQuery = HttpClientListQuery;
export type RoleList = HttpClientListResponse<RoleRow, RoleListQuery>;

export type RoleCreateBody = {
  name: string;
  rolePolicy: RolePolicyProperty;
};

export type RoleUpdateBody = {
  name: string;
  rolePolicy: RolePolicyProperty;
};

export type RoleUpdateUsersBody = RoleRowUser[];
