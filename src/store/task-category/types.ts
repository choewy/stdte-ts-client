import { TaskCategoryListQuery, TaskCategoryList } from '@service';

export type TaskCategoryStoreProps = {
  load: boolean;
  list: TaskCategoryList;
  query: TaskCategoryListQuery;
};
