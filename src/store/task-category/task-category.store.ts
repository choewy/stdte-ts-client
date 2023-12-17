import { RecoilStore } from '@core';

import { TASK_CATEGORY_LIST, TASK_CATEGORY_LIST_QUERY } from '@service';

import { TaskCategoryStoreProps } from './types';

export class TaskCategoryStore extends RecoilStore<TaskCategoryStoreProps> {
  constructor() {
    super(TaskCategoryStore.name, {
      load: true,
      list: TASK_CATEGORY_LIST,
      query: TASK_CATEGORY_LIST_QUERY,
    });
  }
}

export const taskCategoryStore = new TaskCategoryStore();
