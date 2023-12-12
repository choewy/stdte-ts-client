import { RecoilStore } from '@core';

import { DialogStoreProps } from './types';

export class DialogStore extends RecoilStore<DialogStoreProps> {
  constructor() {
    super(DialogStore.name, {
      profile: { updatePassword: false },
    });
  }
}

export const dialogStore = new DialogStore();
