import { TimeRecordListQuery, TimeRecordList, TimeRecordRow } from './types';

export const TIME_RECORD_LIST_QUERY: TimeRecordListQuery = {
  user: 0,
  s: '',
  e: '',
};

export const TIME_RECORD_LIST: TimeRecordList = {
  sums: [],
  rows: [],
};

export const TIME_RECORD_ROW: TimeRecordRow = {
  id: null,
  date: '',
  time: '0',
  project: 0,
  category: {
    parent: 0,
    child: 0,
  },
  createdAt: '',
  updatedAt: '',
};
