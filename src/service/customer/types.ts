import { HttpClientListQuery, HttpClientListResponse } from '@core';

export type CustomerRow = {
  id: number;
  kr: string;
  en: string;
  alias: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type CustomerListQuery = HttpClientListQuery;
export type CustomerList = HttpClientListResponse<CustomerRow, CustomerListQuery>;

export type CustomerCreateBody = {
  kr: string;
  en: string;
  alias: string;
  description: string;
};

export type CustomerUpdateBody = {
  kr: string;
  en: string;
  alias: string;
  description: string;
};
