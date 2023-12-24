import { RecoilStore } from '@core';
import { ANALYSIS_PROJECT_RECORD_LIST, ANALYSIS_PROJECT_RECORD_LIST_QUERY } from '@service';

import { AnalysisProjectRecordStoreProps } from './types';

export class AnalysisProjectRecordStore extends RecoilStore<AnalysisProjectRecordStoreProps> {
  constructor() {
    super(AnalysisProjectRecordStore.name, {
      tabIndex: 'customer',
      head: '고객사',
      query: ANALYSIS_PROJECT_RECORD_LIST_QUERY,
      list: ANALYSIS_PROJECT_RECORD_LIST,
    });
  }
}

export const analysisProjectRecordStore = new AnalysisProjectRecordStore();
