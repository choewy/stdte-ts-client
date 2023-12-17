import { HttpClientListQuery, HttpClientListResponse } from '@core';

export type IndustryCategoryListQuery = HttpClientListQuery;
export type IndustryCategoryRow = {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type IndustryCategoryList = HttpClientListResponse<IndustryCategoryRow, IndustryCategoryListQuery>;

export type IndustryCategoryCreateBody = {
  name: string;
  description: string;
};

export type IndustryCategoryUpdateBody = {
  name: string;
  description: string;
};
