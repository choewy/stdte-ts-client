import { HttpClientListQuery, HttpClientListResponse } from '@core';

export type BusinessCategoryRow = {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type BusinessCategoryListQuery = HttpClientListQuery;
export type BusinessCategoryList = HttpClientListResponse<BusinessCategoryRow, BusinessCategoryListQuery>;

export type BusinessCategoryCreateBody = {
  name: string;
  description: string;
};

export type BusinessCategoryUpdateBody = {
  name: string;
  description: string;
};
