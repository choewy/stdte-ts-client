import { TimeRecordLogList, TimeRecordProjectList, TimeRecordListQuery, TimeRecordList } from './types';

export const TIME_RECORD_LOG_LIST: TimeRecordLogList = {
  total: 0,
  rows: [],
  query: {},
};

export const TIME_RECORD_PROJECT_LIST: TimeRecordProjectList = {
  total: 0,
  rows: [],
  query: {},
};

export const TIME_RECORD_LIST_QUERY: TimeRecordListQuery = {
  user: 0,
  s: '',
  e: '',
};

export const TIME_RECORD_LIST: TimeRecordList = {
  sums: [],
  rows: [],
};
