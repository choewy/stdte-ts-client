import { SelectListQuery, SelectListResponse } from '@service';

export type SelectStoreProps = {
  users: {
    list: SelectListResponse;
    query: SelectListQuery;
  };
  roles: {
    list: SelectListResponse;
    query: SelectListQuery;
  };
  category: {
    businesses: {
      list: SelectListResponse;
      query: SelectListQuery;
    };
    industries: {
      list: SelectListResponse;
      query: SelectListQuery;
    };
    tasks: {
      list: SelectListResponse;
      query: SelectListQuery;
    };
  };
};
