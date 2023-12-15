import { RecoilStore } from '@core';

import { DialogStoreProps } from './types';

import { DIALOG_DEFAULT_ROLE_ROW } from './constants';

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
    });
  }
}

export const dialogStore = new DialogStore();
