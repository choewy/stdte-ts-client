import { RecoilStore } from '@core';

import { INDUSTRY_CATEGORY_LIST, INDUSTRY_CATEGORY_LIST_QUERY } from '@service';

import { IndustryCategoryStoreProps } from './types';

export class IndustryCategoryStore extends RecoilStore<IndustryCategoryStoreProps> {
  constructor() {
    super(IndustryCategoryStore.name, {
      load: true,
      list: INDUSTRY_CATEGORY_LIST,
      query: INDUSTRY_CATEGORY_LIST_QUERY,
    });
  }
}

export const industryCategoryStore = new IndustryCategoryStore();
