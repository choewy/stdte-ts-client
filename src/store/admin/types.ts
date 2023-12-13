import { CredentialsAdminListQuery, CredentialsAdminListResponse, CredentialsAdminStatsResposne } from '@service';

export type AdminCredentialsStoreProps = {
  stats: CredentialsAdminStatsResposne[];
  list: CredentialsAdminListResponse;
  query: CredentialsAdminListQuery;
};
