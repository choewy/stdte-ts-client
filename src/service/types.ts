import {
  AuthStatusText,
  AuthStatusValue,
  EmploymentStatusText,
  EmploymentStatusValue,
  EnumMap,
  RolePolicyText,
  RolePolicyValue,
} from '@common';

export type AuthRolePolicyResponse = {
  id: number;
  accessRole: EnumMap<RolePolicyValue, RolePolicyText>;
  accessTeam: EnumMap<RolePolicyValue, RolePolicyText>;
  accessUser: EnumMap<RolePolicyValue, RolePolicyText>;
  accessProject: EnumMap<RolePolicyValue, RolePolicyText>;
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
  authStatus: EnumMap<AuthStatusValue, AuthStatusText>;
  employmentStatus: EnumMap<EmploymentStatusValue, EmploymentStatusText>;
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
