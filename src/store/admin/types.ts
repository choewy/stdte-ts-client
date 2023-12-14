import {
  RoleAdminListQuery,
  RoleAdminListResponse,
  CredentialsAdminListQuery,
  CredentialsAdminListResponse,
  CredentialsAdminStatsResposne,
} from '@service';

export type AdminRoleStoreProps = {
  list: RoleAdminListResponse;
  query: RoleAdminListQuery;
};

export type AdminCredentialsStoreProps = {
  stats: CredentialsAdminStatsResposne[];
  list: CredentialsAdminListResponse;
  query: CredentialsAdminListQuery;
};
