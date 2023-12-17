import { TaskCategoryListQuery, TaskCategoryListResponse } from '@service';

export type TaskCategoryStoreProps = {
  load: boolean;
  list: TaskCategoryListResponse;
  query: TaskCategoryListQuery;
};
