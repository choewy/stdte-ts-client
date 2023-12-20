import { RecoilStore } from '@core';

import {
  PROJECT_RECORD_ORDER_LIST_QUERY,
  PROJECT_RECORD_SALE_LIST_QUERY,
  PROJECT_RECORD_ORDER_LIST,
  PROJECT_RECORD_SALE_LIST,
} from '@service';

import { ProjectRecordStoreProps } from './types';

export class ProjectRecordStore extends RecoilStore<ProjectRecordStoreProps> {
  constructor() {
    super(ProjectRecordStore.name, {
      order: {
        load: true,
        list: PROJECT_RECORD_ORDER_LIST,
        query: PROJECT_RECORD_ORDER_LIST_QUERY,
      },
      sale: {
        load: true,
        list: PROJECT_RECORD_SALE_LIST,
        query: PROJECT_RECORD_SALE_LIST_QUERY,
      },
    });
  }
}

export const projectRecordStore = new ProjectRecordStore();
