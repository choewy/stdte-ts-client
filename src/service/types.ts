import { AuthStatusValue, EmploymentStatusValue, RolePolicyValue } from '@common';

export type AuthRolePolicyResponse = {
  id: number;
  accessRole: RolePolicyValue;
  accessTeam: RolePolicyValue;
  accessUser: RolePolicyValue;
  accessProject: RolePolicyValue;
};

export type AuthRoleResponse = {
  id: number;
  name: string;
  rolePolicy: AuthRolePolicyResponse;
};

export type AuthResponse = {
  id: number;
  email: string;
  name: string;
  authStatus: AuthStatusValue;
  employmentStatus: EmploymentStatusValue;
  role: AuthRoleResponse | null;
};

export type AuthSignInBody = {
  email: string;
  password: string;
};

export type AuthSignUpBody = {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
};

export type AuthUpdatePasswordBody = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};
