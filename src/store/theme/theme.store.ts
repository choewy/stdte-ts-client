import { RecoilStore } from '@core';

export class ThemeStore extends RecoilStore<{ color: string }> {
  constructor() {
    super(ThemeStore.name, { color: '#A00' });
  }
}

export const themeStore = new ThemeStore();
