import { CustomerListQuery, CustomerListResponse } from '@service';

export type CustomerStoreProps = {
  load: boolean;
  list: CustomerListResponse;
  query: CustomerListQuery;
};
