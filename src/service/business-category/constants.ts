import { BusinessCategoryListQuery, BusinessCategoryList, BusinessCategoryRow } from './types';

export const BUSINESS_CATEGORY_ROW: BusinessCategoryRow = {
  id: 0,
  name: '',
  description: '',
  createdAt: '',
  updatedAt: '',
};

export const BUSINESS_CATEGORY_LIST_QUERY: BusinessCategoryListQuery = {
  skip: 0,
  take: 20,
};

export const BUSINESS_CATEGORY_LIST: BusinessCategoryList = {
  total: 0,
  rows: [],
  query: BUSINESS_CATEGORY_LIST_QUERY,
};
