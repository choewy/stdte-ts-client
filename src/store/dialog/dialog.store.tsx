import { RecoilStore } from '@core';

import { DialogStoreProps } from './types';

import { DIALOG_DEFAULT_ROLE_ROW, DIALOG_DEFAULT_USER_ROW } from './constants';
import { BUSINESS_CATEGORY_ROW } from '@service';

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
          row: DIALOG_DEFAULT_ROLE_ROW,
        },
        update: {
          open: false,
          row: DIALOG_DEFAULT_ROLE_ROW,
        },
        delete: {
          open: false,
          row: DIALOG_DEFAULT_ROLE_ROW,
        },
      },
      user: {
        update: { open: false, row: DIALOG_DEFAULT_USER_ROW },
      },
      businessCategory: {
        create: { open: false },
        update: { open: false, row: BUSINESS_CATEGORY_ROW },
        delete: { open: false, row: BUSINESS_CATEGORY_ROW },
      },
    });
  }
}

export const dialogStore = new DialogStore();
