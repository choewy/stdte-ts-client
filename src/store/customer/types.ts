import { CustomerListQuery, CustomerList } from '@service';

export type CustomerStoreProps = {
  load: boolean;
  list: CustomerList;
  query: CustomerListQuery;
};
