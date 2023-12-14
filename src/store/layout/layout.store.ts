import { RecoilStore } from '@core';

import { LayoutStoreProps } from './types';
import { localStorageService } from '@service';

export class LayoutStore extends RecoilStore<LayoutStoreProps> {
  constructor() {
    super(LayoutStore.name, {
      loading: false,
      size: { innerHeight: window.innerHeight, innerWidth: window.innerWidth },
      theme: localStorageService.getTheme() ?? '#A00',
      helmet: { title: '' },
      header: { title: '' },
      sidebar: { open: false },
    });
  }
}

export const layoutStore = new LayoutStore();
