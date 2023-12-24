import { HttpService } from '@core';

import { AnalysisProjectRecordList, AnalysisProjectRecordListQuery } from './types';

export class AnalysisHttpService extends HttpService {
  async getProjectOrderRecords(query: AnalysisProjectRecordListQuery) {
    return this.get<AnalysisProjectRecordList>(this.url('project/orders'), { params: query, delay: 250 });
  }

  async getProjectSaleRecords(query: AnalysisProjectRecordListQuery) {
    return this.get<AnalysisProjectRecordList>(this.url('project/sales'), { params: query, delay: 250 });
  }
}

export const analysisHttpService = new AnalysisHttpService('analysis');
