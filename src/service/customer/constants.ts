import { CustomerListQuery, CustomerListResponse, CustomerRowResponse } from './types';

export const CUSTOMER_ROW: CustomerRowResponse = {
  id: 0,
  kr: '',
  en: '',
  alias: '',
  description: '',
  createdAt: '',
  updatedAt: '',
};

export const CUSTOMER_QUERY: CustomerListQuery = {
  skip: 0,
  take: 20,
};

export const CUSTOMER_LIST: CustomerListResponse = {
  total: 0,
  rows: [],
  query: CUSTOMER_QUERY,
};
