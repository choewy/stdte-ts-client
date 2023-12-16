import { BusinessCategoryListQuery, BusinessCategoryListResponse, BusinessCategoryRowResponse } from './types';

export const BUSINESS_CATEGORY_ROW: BusinessCategoryRowResponse = {
  id: 0,
  name: '',
  description: '',
  createdAt: '',
  updatedAt: '',
};

export const BUSINESS_CATEGORY_QUERY: BusinessCategoryListQuery = {
  skip: 0,
  take: 20,
};

export const BUSINESS_CATEGORY_LIST: BusinessCategoryListResponse = {
  total: 0,
  rows: [],
  query: BUSINESS_CATEGORY_QUERY,
};
