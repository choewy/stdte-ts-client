import { HttpStatusCode, Method } from 'axios';
import { VariantType } from 'notistack';

import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

import { AuthStatusValue, EmploymentStatusValue, QueryOrder, RolePolicyValue, SideMenuType } from './enums';

export type EnumType = string[] | (string | number)[] | Record<string, string | number>;

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

export type ApiListResponse<D, Q> = {
  total: number;
  rows: D[];
  query: Q;
};

export type ApiListQuery = {
  skip: number;
  take: number;
};

export type NotiEventDetail = {
  id: string;
  variant: VariantType;
  message: string;
};

export type SideMenuItemValue = {
  key: string;
  type: SideMenuType;
  title: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  path?: string;
  divider?: boolean;
  access?: Partial<Record<keyof Omit<RolePolicy, 'id'>, RolePolicyValue>>;
  children?: Omit<SideMenuItemValue, 'children'>[];
};

export type Auth = {
  id: number;
  name: string;
  email: string;
  authStatus: AuthStatusValue;
  employmentStatus: EmploymentStatusValue;
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

export type HttpRequestLog = {
  id: string;
  ip: string;
  method: string;
  path: string;
  params: object | null;
  query: object | null;
  body: object | null;
  status: {
    code: number;
    message: string;
  };
  exception: {
    name: string;
    message: string;
  } | null;
  error: {
    name: string;
    message: string;
    stack: string;
  } | null;
  user: {
    id: number;
    name: string;
  } | null;
  requestAt: string;
  responseAt: string;
};

export type HttpRequestLogQuery = ApiListQuery & {
  methods: Method[];
  statusCodes: HttpStatusCode[];
  order: QueryOrder;
};
