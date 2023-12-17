import { CustomerListQuery, CustomerList, CustomerRow } from './types';

export const CUSTOMER_ROW: CustomerRow = {
  id: 0,
  kr: '',
  en: '',
  alias: '',
  description: '',
  createdAt: '',
  updatedAt: '',
};

export const CUSTOMER_LIST_QUERY: CustomerListQuery = {
  skip: 0,
  take: 20,
};

export const CUSTOMER_LIST: CustomerList = {
  total: 0,
  rows: [],
  query: CUSTOMER_LIST_QUERY,
};
