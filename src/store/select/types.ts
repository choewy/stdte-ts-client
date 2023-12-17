import { SelectListQuery, SelectList } from '@service';

export type SelectStoreProps = {
  users: {
    list: SelectList;
    query: SelectListQuery;
  };
  roles: {
    list: SelectList;
    query: SelectListQuery;
  };
  category: {
    businesses: {
      list: SelectList;
      query: SelectListQuery;
    };
    industries: {
      list: SelectList;
      query: SelectListQuery;
    };
    tasks: {
      list: SelectList;
      query: SelectListQuery;
    };
  };
};
