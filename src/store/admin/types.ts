import { CredentialsListQuery, CredentialsList, CredentialsStatsRow } from '@service';

export type AdminCredentialsStoreProps = {
  load: boolean;
  stats: CredentialsStatsRow[];
  list: CredentialsList;
  query: CredentialsListQuery;
};
