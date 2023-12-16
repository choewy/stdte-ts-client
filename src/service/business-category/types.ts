import { HttpClientListQuery, HttpClientListResponse } from '@core';

export type BusinessCategoryListQuery = HttpClientListQuery;
export type BusinessCategoryRowResponse = {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type BusinessCategoryListResponse = HttpClientListResponse<
  BusinessCategoryRowResponse,
  BusinessCategoryListQuery
>;
