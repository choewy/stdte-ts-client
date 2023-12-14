import { CredentialsStatus, RolePolicyProperty } from '@common';
import { HttpClientListQuery, HttpClientListResponse } from '@core';

export type CredentialsRoleRespnose = {
  id: number;
  name: string;
  rolePolicy: RolePolicyProperty;
  createdAt: string;
  updatedAt: string;
};

export type CredentialsResponse = {
  id: number;
  name: string;
  email: string;
  role: CredentialsRoleRespnose | null;
  status: CredentialsStatus;
  createdAt: string;
  updatedAt: string;
};

export type CredentialsSignInBody = {
  email: string;
  password: string;
};

export type CredentialsSignUpBody = {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
};

export type CredentialsUpdatePasswordBody = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export type CredentialsUpdateStatusParam = number;

export type CredentialsUpdateStatusBody = {
  status: CredentialsStatus;
};

export type CredentialsAdminStatsResposne = {
  status: CredentialsStatus;
  count: number;
};

export type CredentialsAdminListQuery = HttpClientListQuery & { status: CredentialsStatus };

export type CredentialsAdminRowResponse = {
  id: number;
  email: string;
  name: string;
  status: CredentialsStatus;
  createdAt: string;
  updatedAt: string;
};

export type CredentialsAdminListResponse = HttpClientListResponse<
  CredentialsAdminRowResponse,
  CredentialsAdminListQuery
>;

export type CredentialsAdminUpdatePasswordBody = {
  newPassword: string;
  confirmPassword: string;
};

export type CredentialsAdminUpdateStatusBody = {
  status: CredentialsStatus;
};
