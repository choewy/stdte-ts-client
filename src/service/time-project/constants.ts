import { TimeProjectRow, TimeProjectRowTaskCategoryChild } from './types';

export const TIME_PROJECT_ROW: TimeProjectRow = {
  id: 0,
  name: '',
  code: '',
  category: {
    id: 0,
    name: '',
    children: [],
  },
};

export const TIME_PROJECT_ROW_TASK_CATEGORY_CHILD: TimeProjectRowTaskCategoryChild = {
  id: 0,
  name: '',
};
