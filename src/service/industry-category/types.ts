import { HttpClientListQuery, HttpClientListResponse } from '@core';

export type IndustryCategoryListQuery = HttpClientListQuery;
export type IndustryCategoryRowResponse = {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type IndustryCategoryListResponse = HttpClientListResponse<
  IndustryCategoryRowResponse,
  IndustryCategoryListQuery
>;

export type IndustryCategoryCreateBody = {
  name: string;
  description: string;
};

export type IndustryCategoryUpdateBody = {
  name: string;
  description: string;
};
