import { RecoilStore } from '@core';
import { ANALYSIS_TIME_RECORDS_QUERY } from '@service';

import { AnalysisTimeRecordStoreProps } from './types';

export class AnalysisTimeRecordStore extends RecoilStore<AnalysisTimeRecordStoreProps> {
  constructor() {
    super(AnalysisTimeRecordStore.name, {
      query: ANALYSIS_TIME_RECORDS_QUERY,
      list: {
        years: [],
        users: [],
        projects: [],
      },
    });
  }
}

export const analysisTimeRecordStore = new AnalysisTimeRecordStore();
