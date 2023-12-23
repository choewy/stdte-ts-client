import { RecoilStore } from '@core';
import {
  BUSINESS_CATEGORY_ROW,
  CUSTOMER_ROW,
  INDUSTRY_CATEGORY_ROW,
  PROJECT_RECORD_ROW,
  PROJECT_ROW,
  ROLE_ROW,
  TASK_CATEGORY_ROW,
  TASK_CATEGORY_ROW_CHILD,
  TIME_RECORD_PROJECT_ROW,
  TIME_RECORD_PROJECT_ROW_TASK_CATEGORY_CHILD,
  TIME_RECORD_ROW,
  USER_ROW,
} from '@service';

import { DialogStoreProps } from './types';

export class DialogStore extends RecoilStore<DialogStoreProps> {
  constructor() {
    super(DialogStore.name, {
      mypage: {
        updatePassword: { open: false },
      },
      credentials: {
        updatePassword: {
          id: 0,
          open: false,
        },
      },
      role: {
        create: { open: false },
        users: {
          open: false,
          row: ROLE_ROW,
        },
        update: {
          open: false,
          row: ROLE_ROW,
        },
        delete: {
          open: false,
          row: ROLE_ROW,
        },
      },
      user: {
        update: { open: false, row: USER_ROW },
      },
      customer: {
        create: { open: false },
        update: { open: false, row: CUSTOMER_ROW },
        delete: { open: false, row: CUSTOMER_ROW },
      },
      businessCategory: {
        create: { open: false },
        update: { open: false, row: BUSINESS_CATEGORY_ROW },
        delete: { open: false, row: BUSINESS_CATEGORY_ROW },
      },
      industryCategory: {
        create: { open: false },
        update: { open: false, row: INDUSTRY_CATEGORY_ROW },
        delete: { open: false, row: INDUSTRY_CATEGORY_ROW },
      },
      taskCategory: {
        create: { open: false },
        update: { open: false, row: TASK_CATEGORY_ROW },
        delete: { open: false, row: TASK_CATEGORY_ROW },
        children: { open: false, row: TASK_CATEGORY_ROW },
        child: {
          create: { open: false, parent: TASK_CATEGORY_ROW },
          update: { open: false, parent: TASK_CATEGORY_ROW, child: TASK_CATEGORY_ROW_CHILD },
          delete: { open: false, parent: TASK_CATEGORY_ROW, child: TASK_CATEGORY_ROW_CHILD },
        },
      },
      project: {
        create: { open: false },
        record: { open: false, row: PROJECT_ROW },
        update: { open: false, row: PROJECT_ROW },
        delete: { open: false, row: PROJECT_ROW },
      },
      projectRecord: {
        order: {
          create: { open: false, row: PROJECT_ROW },
          update: { open: false, row: PROJECT_RECORD_ROW },
          delete: { open: false, row: PROJECT_RECORD_ROW },
        },
        sale: {
          create: { open: false, row: PROJECT_ROW },
          update: { open: false, row: PROJECT_RECORD_ROW },
          delete: { open: false, row: PROJECT_RECORD_ROW },
        },
      },
      timeRecord: {
        upsert: {
          open: false,
          project: TIME_RECORD_PROJECT_ROW,
          child: TIME_RECORD_PROJECT_ROW_TASK_CATEGORY_CHILD,
          date: { date: '', weekday: '', color: undefined },
          row: TIME_RECORD_ROW,
        },
      },
    });
  }
}

export const dialogStore = new DialogStore();
