import { CredentialsList, CredentialsListQuery, CredentialsStatsRow } from '@service';

export type CredentialsStoreProps = {
  load: boolean;
  list: CredentialsList;
  query: CredentialsListQuery;
  stats: CredentialsStatsRow[];
};
