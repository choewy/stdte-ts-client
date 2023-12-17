import { CustomerListQuery, CustomerListResponse } from './types';

export const CUSTOMER_QUERY: CustomerListQuery = {
  skip: 0,
  take: 20,
};

export const CUSTOMER_LIST: CustomerListResponse = {
  total: 0,
  rows: [],
  query: CUSTOMER_QUERY,
};
