import { EnumMap, RolePolicyText, RolePolicyValue } from '@common';

export class AuthRolePolicyResponse {
  id: number;
  accessRole: EnumMap<RolePolicyValue, RolePolicyText>;
  accessTeam: EnumMap<RolePolicyValue, RolePolicyText>;
  accessUser: EnumMap<RolePolicyValue, RolePolicyText>;
  accessProject: EnumMap<RolePolicyValue, RolePolicyText>;
}

export class AuthRoleResponse {
  id: number;
  name: string;
  rolePolicy: AuthRolePolicyResponse;
}

export class AuthCheckResponse {
  id: number;
  email: string;
  name: string;
  role: AuthRoleResponse | null;
}
