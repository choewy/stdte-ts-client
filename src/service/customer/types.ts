import { HttpClientListQuery, HttpClientListResponse } from '@core';

export type CustomerListQuery = HttpClientListQuery;
export type CustomerRowResponse = {
  id: number;
  kr: string;
  en: string;
  alias: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type CustomerListResponse = HttpClientListResponse<CustomerRowResponse, CustomerListQuery>;

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
