import { HttpClientDownloadResponse, HttpService } from '@core';

import {
  AnalysisProjectRecordList,
  AnalysisProjectRecordQuery,
  AnalysisTimeRecordList,
  AnalysisTimeRecordsQuery,
  AnalysisUserRecordList,
  AnalysisUserRecordsQuery,
} from './types';

export class AnalysisHttpService extends HttpService {
  async getProjectOrderRecords(query: AnalysisProjectRecordQuery) {
    return this.get<AnalysisProjectRecordList>(this.url('project/records/orders'), { params: query, delay: 250 });
  }

  async getProjectSaleRecords(query: AnalysisProjectRecordQuery) {
    return this.get<AnalysisProjectRecordList>(this.url('project/records/sales'), { params: query, delay: 250 });
  }

  async downloadProjectRecords(query: AnalysisProjectRecordQuery) {
    return this.get<HttpClientDownloadResponse>(this.url('project/records/download'), { params: query, delay: 250 });
  }

  async getTimeRecords(query: AnalysisTimeRecordsQuery) {
    return this.get<AnalysisTimeRecordList>(this.url('times'), { params: query, delay: 250 });
  }

  async downloadTimeRecords(query: AnalysisTimeRecordsQuery) {
    return this.get<HttpClientDownloadResponse>(this.url('times/download'), { params: query, delay: 250 });
  }

  async getUserRecords(query: AnalysisUserRecordsQuery) {
    return this.get<AnalysisUserRecordList>(this.url('users'), { params: query, delay: 250 });
  }

  async downloadUserRecords(query: AnalysisUserRecordsQuery) {
    return this.get<HttpClientDownloadResponse>(this.url('users/download'), { params: query, delay: 250 });
  }
}

export const analysisHttpService = new AnalysisHttpService('analysis');
