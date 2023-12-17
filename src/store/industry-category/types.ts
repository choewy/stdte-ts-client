import { IndustryCategoryListQuery, IndustryCategoryList } from '@service';

export type IndustryCategoryStoreProps = {
  load: boolean;
  list: IndustryCategoryList;
  query: IndustryCategoryListQuery;
};
