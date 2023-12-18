import { RecoilStore } from '@core';
import { PROJECT_LIST, PROJECT_LIST_QUERY } from '@service';

import { ProjectStoreProps } from './types';

export class ProjectStore extends RecoilStore<ProjectStoreProps> {
  constructor() {
    super(ProjectStore.name, {
      load: true,
      list: PROJECT_LIST,
      query: PROJECT_LIST_QUERY,
    });
  }
}

export const projectStore = new ProjectStore();
