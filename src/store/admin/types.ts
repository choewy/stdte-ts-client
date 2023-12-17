import { CredentialsAdminListQuery, CredentialsAdminListResponse, CredentialsAdminStatsResposne } from '@service';

export type AdminCredentialsStoreProps = {
  load: boolean;
  stats: CredentialsAdminStatsResposne[];
  list: CredentialsAdminListResponse;
  query: CredentialsAdminListQuery;
};
