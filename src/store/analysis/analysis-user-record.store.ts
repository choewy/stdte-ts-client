import { RecoilStore } from '@core';
import { ANALYSIS_USER_RECORDS_QUERY } from '@service';

import { AnalysisUserRecordStoreProps } from './types';

export class AnalysisUserRecordStore extends RecoilStore<AnalysisUserRecordStoreProps> {
  constructor() {
    super(AnalysisUserRecordStore.name, {
      query: ANALYSIS_USER_RECORDS_QUERY,
      list: {
        years: [],
        users: [],
      },
    });
  }
}

export const analysisUserRecordStore = new AnalysisUserRecordStore();
