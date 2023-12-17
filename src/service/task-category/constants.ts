import { TaskCategoryListQuery, TaskCategoryList, TaskCategoryRowChild, TaskCategoryRow } from './types';

export const TASK_CATEGORY_ROW_CHILD: TaskCategoryRowChild = {
  id: 0,
  name: '',
  description: '',
  createdAt: '',
  updatedAt: '',
};

export const TASK_CATEGORY_ROW: TaskCategoryRow = {
  id: 0,
  name: '',
  description: '',
  children: [],
  createdAt: '',
  updatedAt: '',
};

export const TASK_CATEGORY_LIST_QUERY: TaskCategoryListQuery = {
  skip: 0,
  take: 20,
};

export const TASK_CATEGORY_LIST: TaskCategoryList = {
  total: 0,
  rows: [],
  query: TASK_CATEGORY_LIST_QUERY,
};
