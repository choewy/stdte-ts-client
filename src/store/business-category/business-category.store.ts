import { RecoilStore } from '@core';

import { BUSINESS_CATEGORY_LIST, BUSINESS_CATEGORY_QUERY } from '@service';

import { BusinessCategoryStoreProps } from './types';

export class BusinessCategoryStore extends RecoilStore<BusinessCategoryStoreProps> {
  constructor() {
    super(BusinessCategoryStore.name, {
      load: true,
      list: BUSINESS_CATEGORY_LIST,
      query: BUSINESS_CATEGORY_QUERY,
    });
  }
}

export const businessCategoryStore = new BusinessCategoryStore();
