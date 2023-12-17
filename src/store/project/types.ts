import { ProjectList, ProjectListQuery } from '@service';

export type ProjectStoreProps = {
  load: boolean;
  list: ProjectList;
  query: ProjectListQuery;
};
