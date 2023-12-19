import { RecoilStore } from '@core';
import {
  BUSINESS_CATEGORY_ROW,
  CUSTOMER_ROW,
  INDUSTRY_CATEGORY_ROW,
  PROJECT_ROW,
  ROLE_ROW,
  TASK_CATEGORY_ROW,
  TASK_CATEGORY_ROW_CHILD,
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
        update: { open: false, row: PROJECT_ROW },
        delete: { open: false, row: PROJECT_ROW },
      },
    });
  }
}

export const dialogStore = new DialogStore();
