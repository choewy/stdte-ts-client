import { RecoilStore } from '@core';
import { SnackEventDetail } from '@service';

export class SnackStore extends RecoilStore<SnackEventDetail[]> {
  constructor() {
    super(SnackStore.name, []);
  }
}

export const snackStore = new SnackStore();
