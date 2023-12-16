import {
  RoleAdminListQuery,
  RoleAdminListResponse,
  CredentialsAdminListQuery,
  CredentialsAdminListResponse,
  CredentialsAdminStatsResposne,
} from '@service';

export type AdminRoleStoreProps = {
  load: boolean;
  list: RoleAdminListResponse;
  query: RoleAdminListQuery;
};

export type AdminCredentialsStoreProps = {
  load: boolean;
  stats: CredentialsAdminStatsResposne[];
  list: CredentialsAdminListResponse;
  query: CredentialsAdminListQuery;
};
