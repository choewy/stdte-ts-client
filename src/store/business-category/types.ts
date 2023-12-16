import { BusinessCategoryListQuery, BusinessCategoryListResponse } from '@service';

export type BusinessCategoryStoreProps = {
  load: boolean;
  list: BusinessCategoryListResponse;
  query: BusinessCategoryListQuery;
};
