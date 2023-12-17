import { HttpClientListQuery, HttpClientListResponse } from '@core';

export type TaskCategoryRowChild = {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type TaskCategoryRowResponse = {
  id: number;
  name: string;
  description: string;
  children: TaskCategoryRowChild[];
  createdAt: string;
  updatedAt: string;
};

export type TaskCategoryListQuery = HttpClientListQuery;
export type TaskCategoryListResponse = HttpClientListResponse<TaskCategoryRowResponse, TaskCategoryListQuery>;

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
