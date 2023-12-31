import { HttpClientListResponse } from '@core';

export type TimeProjectRowTaskCategoryChild = {
  id: number;
  name: string;
};

export type TimeProjectRowTaskCategory = {
  id: number;
  name: string;
  children: TimeProjectRowTaskCategoryChild[];
};

export type TimeProjectRow = {
  id: number;
  name: string;
  code: string;
  category: TimeProjectRowTaskCategory;
};

export type TimeProjectList = HttpClientListResponse<TimeProjectRow, {}>;
