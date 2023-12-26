import { HttpService } from '@core';

import {
  AnalysisProjectRecordList,
  AnalysisProjectRecordListQuery,
  AnalysisTimeRecord,
  AnalysisTimeRecordsQuery,
} from './types';

export class AnalysisHttpService extends HttpService {
  async getProjectOrderRecords(query: AnalysisProjectRecordListQuery) {
    return this.get<AnalysisProjectRecordList>(this.url('project/orders'), { params: query, delay: 250 });
  }

  async getProjectSaleRecords(query: AnalysisProjectRecordListQuery) {
    return this.get<AnalysisProjectRecordList>(this.url('project/sales'), { params: query, delay: 250 });
  }

  async getTimeRecords(query: AnalysisTimeRecordsQuery) {
    return this.get<AnalysisTimeRecord[]>(this.url('times'), { params: query, delay: 250 });
  }
}

export const analysisHttpService = new AnalysisHttpService('analysis');
