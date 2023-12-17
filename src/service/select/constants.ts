import { SelectListQuery, SelectList, SelectRow } from './types';

export const SELECT_ROW: SelectRow = {
  id: 0,
  name: '',
  description: '',
};

export const SELECT_LIST_QUERY: SelectListQuery = {
  skip: 0,
  take: 20,
};

export const SELECT_LIST: SelectList = {
  total: 0,
  rows: [],
  query: SELECT_LIST_QUERY,
};
