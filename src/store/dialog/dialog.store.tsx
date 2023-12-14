import { RecoilStore } from '@core';

import { DialogStoreProps } from './types';

export class DialogStore extends RecoilStore<DialogStoreProps> {
  constructor() {
    super(DialogStore.name, {
      mypage: {
        updatePassword: { open: false },
      },
      credentials: {
        updatePassword: { id: 0, open: false },
      },
    });
  }
}

export const dialogStore = new DialogStore();
