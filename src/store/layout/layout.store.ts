import { RecoilStore } from '@core';

import { LayoutStoreProps } from './types';

export class LayoutStore extends RecoilStore<LayoutStoreProps> {
  constructor() {
    super(LayoutStore.name, {
      loading: false,
      size: { innerHeight: window.innerHeight, innerWidth: window.innerWidth },
      theme: '#A00',
      helmet: { title: '' },
      header: { title: '' },
      sidebar: { open: false },
    });
  }
}

export const layoutStore = new LayoutStore();
