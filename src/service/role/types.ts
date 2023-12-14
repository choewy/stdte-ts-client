import { RolePolicyProperty } from '@common';
import { HttpClientListQuery, HttpClientListResponse } from '@core';

export type RoleAdminUserResponse = {
  id: number;
  name: string;
};

export type RoleAdminListQuery = HttpClientListQuery;
export type RoleAdminRowResponse = {
  id: number;
  name: string;
  users: RoleAdminUserResponse[];
  rolePolicy: RolePolicyProperty;
  createdAt: string;
  updatedAt: string;
};

export type RoleAdminListResponse = HttpClientListResponse<RoleAdminRowResponse, RoleAdminListQuery>;
