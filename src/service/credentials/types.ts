import { CredentialsStatus, RolePolicyProperty } from '@common';

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
  confirmPassword: string;
};

export type CredentialsUpdatePasswordBody = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export type CredentialsAdminUpdatePasswordBody = {
  newPassword: string;
  confirmPassword: string;
};

export type CredentialsAdminUpdateStatusBody = {
  status: CredentialsStatus;
};
