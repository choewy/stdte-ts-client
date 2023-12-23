import {
  TimeRecordLogList,
  TimeRecordProjectList,
  TimeRecordListQuery,
  TimeRecordList,
  TimeRecordProjectRow,
  TimeRecordProjectRowTaskCategory,
  TimeRecordProjectRowTaskCategoryChild,
  TimeRecordRow,
} from './types';

export const TIME_RECORD_LOG_LIST: TimeRecordLogList = {
  total: 0,
  rows: [],
  query: {},
};

export const TIME_RECORD_PROJECT_ROW_TASK_CATEGORY_CHILD: TimeRecordProjectRowTaskCategoryChild = {
  id: 0,
  name: '',
};

export const TIME_RECORD_PROJECT_ROW_TASK_CATEGORY: TimeRecordProjectRowTaskCategory = {
  id: 0,
  name: '',
  children: [],
};

export const TIME_RECORD_PROJECT_ROW: TimeRecordProjectRow = {
  id: 0,
  name: '',
  code: '',
  category: TIME_RECORD_PROJECT_ROW_TASK_CATEGORY,
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

export const TIME_RECORD_ROW: TimeRecordRow = {
  id: '',
  date: '',
  time: '',
  project: 0,
  category: {
    parent: 0,
    child: 0,
  },
  createdAt: '',
  updatedAt: '',
};
