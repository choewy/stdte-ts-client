import { RecoilStore } from '@core';
import { ANALYSIS_TIME_RECORDS_QUERY } from '@service';

import { AnalysisTimeRecordStoreProps } from './types';

export class AnalysisTimeRecordStore extends RecoilStore<AnalysisTimeRecordStoreProps> {
  constructor() {
    super(AnalysisTimeRecordStore.name, {
      tabIndex: 0,
      query: ANALYSIS_TIME_RECORDS_QUERY,
      results: [],
    });
  }
}

export const analysisTimeRecordStore = new AnalysisTimeRecordStore();
