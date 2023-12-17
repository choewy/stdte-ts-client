import { IndustryCategoryListQuery, IndustryCategoryList, IndustryCategoryRow } from './types';

export const INDUSTRY_CATEGORY_ROW: IndustryCategoryRow = {
  id: 0,
  name: '',
  description: '',
  createdAt: '',
  updatedAt: '',
};

export const INDUSTRY_CATEGORY_LIST_QUERY: IndustryCategoryListQuery = {
  skip: 0,
  take: 20,
};

export const INDUSTRY_CATEGORY_LIST: IndustryCategoryList = {
  total: 0,
  rows: [],
  query: INDUSTRY_CATEGORY_LIST_QUERY,
};
