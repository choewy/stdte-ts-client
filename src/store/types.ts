import {
  ApiListQuery,
  Auth,
  AuthStatusValue,
  EmploymentStatusValue,
  HttpRequestLog,
  HttpRequestLogQuery,
  Role,
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
  authStatus: AuthStatusValue;
  employmentStatus: EmploymentStatusValue;
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
