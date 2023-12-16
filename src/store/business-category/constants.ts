import { BusinessCategoryListQuery, BusinessCategoryListResponse } from '@service';

export const BUSINESS_CATEGORY_STORE_DEFAULT_QUERY: BusinessCategoryListQuery = {
  skip: 0,
  take: 20,
};

export const BUSINESS_CATEGORY_STORE_DEFAULT_LIST: BusinessCategoryListResponse = {
  total: 0,
  rows: [],
  query: BUSINESS_CATEGORY_STORE_DEFAULT_QUERY,
};
