import { RecoilStore } from '@core';

export class AppStore extends RecoilStore<{}> {
  constructor() {
    super(AppStore.name, {});
  }
}

export const appStore = new AppStore();
