import { HttpStatusCode } from 'axios';

import { RolePolicyValue } from './enums';

export type ApiException = {
  message: string;
  statusCode: HttpStatusCode;
  error: string;
  details?: {
    name: string;
    message: string;
  };
};

export type ApiResponse<D> = {
  ok: boolean;
  data: D;
  exception?: ApiException;
};

export type EnumMap<V, T> = {
  value: V;
  text: T;
};

export type Auth = {
  id: number;
  name: string;
  email: string;
};

export type User = Auth & {};

export type RolePolicy = {
  id: number;
  accessRole: RolePolicyValue;
  accessTeam: RolePolicyValue;
  accessUser: RolePolicyValue;
  accessProject: RolePolicyValue;
};

export type Role = {
  id: number;
  name: string;
  rolePolicy: RolePolicy;
};
