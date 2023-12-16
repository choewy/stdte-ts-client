import { IndustryCategoryListQuery, IndustryCategoryListResponse } from '@service';

export type IndustryCategoryStoreProps = {
  load: boolean;
  list: IndustryCategoryListResponse;
  query: IndustryCategoryListQuery;
};
