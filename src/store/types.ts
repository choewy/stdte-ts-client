import {
  ApiListQuery,
  Auth,
  AuthStatus,
  EmploymentStatus,
  HttpRequestLog,
  HttpRequestLogQuery,
  Role,
  RolePolicy,
  RoleRow,
} from '@common/constants';

export type SettingStoreValue = {
  helmetTitle: string;
  themeColor: string;
  gnbTitle: string;
  openSideMenu: boolean;
};

export type SignStoreValue = {
  ok: null | boolean;
  auth: Auth | null;
  role: Role | null;
  authStatus: AuthStatus;
  employmentStatus: EmploymentStatus;
};

export type HttpRequestLogStoreValue = {
  total: number;
  rows: HttpRequestLog[];
  query: HttpRequestLogQuery;
};

export type RoleStoreValue = {
  total: number;
  rows: RoleRow[];
  query: ApiListQuery;
};

export type RoleSelectStoreValue = {
  id: number;
  name: string;
  rolePolicy: Pick<RolePolicy, 'accessUser'>;
};
