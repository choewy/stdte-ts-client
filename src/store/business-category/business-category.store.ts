import { RecoilStore } from '@core';

import { BusinessCategoryStoreProps } from './types';
import { BUSINESS_CATEGORY_STORE_DEFAULT_LIST, BUSINESS_CATEGORY_STORE_DEFAULT_QUERY } from './constants';

export class BusinessCategoryStore extends RecoilStore<BusinessCategoryStoreProps> {
  constructor() {
    super(BusinessCategoryStore.name, {
      load: true,
      list: BUSINESS_CATEGORY_STORE_DEFAULT_LIST,
      query: BUSINESS_CATEGORY_STORE_DEFAULT_QUERY,
    });
  }
}

export const businessCategoryStore = new BusinessCategoryStore();
