import { RecoilStore } from '@core';

export class LayoutStore extends RecoilStore<{
  size: {
    innerWidth: number;
    innerHeight: number;
  };
  theme: { color: string };
  helmet: { title: string };
  header: { title: string };
  sidebar: { open: boolean };
}> {
  constructor() {
    super(LayoutStore.name, {
      size: { innerHeight: window.innerHeight, innerWidth: window.innerWidth },
      theme: { color: '#A00' },
      helmet: { title: '' },
      header: { title: '' },
      sidebar: { open: false },
    });
  }
}

export const layoutStore = new LayoutStore();
