import { CredentialsStatus } from '@common';

export type CredentialsResponse = {
  id: number;
  email: string;
  status: CredentialsStatus;
  createdAt: string | null;
  updatedAt: string | null;
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
