import { RecoilStore } from '@core';

export class HelmetStore extends RecoilStore<{ title: string }> {
  constructor() {
    super(HelmetStore.name, { title: 'Stdte ts App' });
  }
}

export const helmetStore = new HelmetStore();
