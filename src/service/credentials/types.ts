import { CredentialsStatus, RolePolicyProperty } from '@common';
import { HttpClientListQuery, HttpClientListResponse } from '@core';

export type CredentialsRole = {
  id: number;
  name: string;
  rolePolicy: RolePolicyProperty;
  createdAt: string;
  updatedAt: string;
};

export type Credentials = {
  id: number;
  name: string;
  email: string;
  role: CredentialsRole | null;
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

export type CredentialsUpdateStatusBody = {
  status: CredentialsStatus;
};

export type CredentialsStatsRow = {
  status: CredentialsStatus;
  count: number;
};

export type CredentialsListQuery = HttpClientListQuery & {
  status: CredentialsStatus;
};

export type CredentialsRow = {
  id: number;
  email: string;
  name: string;
  status: CredentialsStatus;
  createdAt: string;
  updatedAt: string;
};

export type CredentialsList = HttpClientListResponse<CredentialsRow, CredentialsListQuery>;

export type CredentialsUpdatePasswordByIdBody = {
  newPassword: string;
  confirmPassword: string;
};

export type CredentialsUpdateStatusByIdBody = {
  status: CredentialsStatus;
};
