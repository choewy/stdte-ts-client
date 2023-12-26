import { HttpClientListResponse } from '@core';

export type TimeRecordLogRow = {
  id: number;
  name: string;
  updatedAt: string;
};

export type TimeRecordLogList = HttpClientListResponse<TimeRecordLogRow, {}>;

export type TimeRecordProjectRowTaskCategoryChild = {
  id: number;
  name: string;
};

export type TimeRecordProjectRowTaskCategory = {
  id: number;
  name: string;
  children: TimeRecordProjectRowTaskCategoryChild[];
};

export type TimeRecordProjectRow = {
  id: number;
  name: string;
  code: string;
  category: TimeRecordProjectRowTaskCategory;
};

export type TimeRecordProjectList = HttpClientListResponse<TimeRecordProjectRow, {}>;

export type TimeRecordRowCategory = {
  parent: number;
  child: number;
};

export type TimeRecordRow = {
  id: number | null;
  date: string;
  time: string;
  project: number;
  category: TimeRecordRowCategory;
  createdAt: string;
  updatedAt: string;
};

export type TimeRecordListQuery = {
  user: number;
  s: string;
  e: string;
};

export type TimeRecordSumRow = {
  date: string;
  total: string;
};

export type TimeRecordList = {
  sums: TimeRecordSumRow[];
  rows: TimeRecordRow[];
};

export type TimeRecordOne = {
  sum: TimeRecordSumRow;
  row: TimeRecordRow;
};

export type TimeRecordUpsertBody = {
  id: number | null;
  date: string;
  time: string;
  user: number;
  project: number;
  taskMainCategory: number;
  taskSubCategory: number;
};
