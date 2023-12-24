import { DateTime } from 'luxon';
import { AnalysisProjectRecordList, AnalysisProjectRecordListQuery } from './types';

export const ANALYSIS_PROJECT_RECORD_LIST_QUERY: AnalysisProjectRecordListQuery = {
  s: DateTime.local().minus({ years: 3 }).toFormat('yyyy'),
  e: DateTime.local().toFormat('yyyy'),
};

export const ANALYSIS_PROJECT_RECORD_LIST: AnalysisProjectRecordList = {
  total: '0',
  years: [],
  customer: [],
  businessCategory: [],
  industryCategory: [],
};
