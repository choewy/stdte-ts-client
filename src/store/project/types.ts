import { ProjectList, ProjectListQuery, ProjectRecordList, ProjectRecordListQuery } from '@service';

export type ProjectStoreProps = {
  load: boolean;
  list: ProjectList;
  query: ProjectListQuery;
};

export type ProjectRecordStoreProps = {
  order: {
    load: boolean;
    list: ProjectRecordList;
    query: ProjectRecordListQuery;
  };
  sale: {
    load: boolean;
    list: ProjectRecordList;
    query: ProjectRecordListQuery;
  };
};
