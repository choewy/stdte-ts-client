import { BusinessCategoryListQuery, BusinessCategoryList } from '@service';

export type BusinessCategoryStoreProps = {
  load: boolean;
  list: BusinessCategoryList;
  query: BusinessCategoryListQuery;
};
