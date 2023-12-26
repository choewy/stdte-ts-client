import { HttpClientListQuery, HttpClientListResponse } from '@core';

export type TaskCategoryRowChild = {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type TaskCategoryRow = {
  id: number;
  name: string;
  description: string;
  isReadonly: boolean;
  children: TaskCategoryRowChild[];
  createdAt: string;
  updatedAt: string;
};

export type TaskCategoryListQuery = HttpClientListQuery;
export type TaskCategoryList = HttpClientListResponse<TaskCategoryRow, TaskCategoryListQuery>;

export type TaskCategoryCreateBody = {
  name: string;
  description: string;
};

export type TaskCategoryUpdateBody = {
  name: string;
  description: string;
};

export type TaskCategoryCreateChildBody = {
  parent: number;
  name: string;
  description: string;
};

export type TaskCategoryUpdateChildBody = {
  name: string;
  description: string;
};
