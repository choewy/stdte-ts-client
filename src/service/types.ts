import { AuthStatus, EmploymentStatus, RolePolicy } from '@common';

export type AuthRoleResponse = {
  id: number;
  name: string;
  rolePolicy: RolePolicy;
};

export type AuthResponse = {
  id: number;
  email: string;
  name: string;
  authStatus: AuthStatus;
  employmentStatus: EmploymentStatus;
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

export type RolePolicyBody = Pick<RolePolicy, 'accessRole' | 'accessTeam' | 'accessUser' | 'accessProject'>;

export type RoleCreateBody = {
  name: string;
  rolePolicy: RolePolicyBody;
  users: number[];
};

export type RoleUpdateBody = Partial<RoleCreateBody>;
