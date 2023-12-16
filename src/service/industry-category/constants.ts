import { IndustryCategoryListQuery, IndustryCategoryListResponse, IndustryCategoryRowResponse } from './types';

export const INDUSTRY_CATEGORY_ROW: IndustryCategoryRowResponse = {
  id: 0,
  name: '',
  description: '',
  createdAt: '',
  updatedAt: '',
};

export const INDUSTRY_CATEGORY_QUERY: IndustryCategoryListQuery = {
  skip: 0,
  take: 20,
};

export const INDUSTRY_CATEGORY_LIST: IndustryCategoryListResponse = {
  total: 0,
  rows: [],
  query: INDUSTRY_CATEGORY_QUERY,
};
