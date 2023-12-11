import { RecoilStore } from '@core';

export class ThemeStore extends RecoilStore<{ color: string }> {
  constructor() {
    super(ThemeStore.name, { color: '#000' });
  }
}

export const themeStore = new ThemeStore();
