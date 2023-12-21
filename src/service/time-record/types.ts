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
