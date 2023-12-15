import { SelectListQuery, SelectListResponse } from '@service';

export const SELECT_STORE_DEFALUT_QUERY: SelectListQuery = {
  skip: 0,
  take: 20,
};

export const SELECT_STORE_DEFALUT_LIST: SelectListResponse = {
  total: 0,
  rows: [],
  query: SELECT_STORE_DEFALUT_QUERY,
};
