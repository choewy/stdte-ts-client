import { DateTime } from 'luxon';
import {
  AnalysisProjectRecordList,
  AnalysisProjectRecordQuery,
  AnalysisTimeRecordsQuery,
  AnalysisUserRecordsQuery,
} from './types';

export const ANALYSIS_PROJECT_RECORD_LIST_QUERY: AnalysisProjectRecordQuery = {
  s: DateTime.local().minus({ years: 3 }).toFormat('yyyy'),
  e: DateTime.local().toFormat('yyyy'),
};

export const ANALYSIS_PROJECT_RECORD_LIST: AnalysisProjectRecordList = {
  customer: { years: [], rows: [] },
  businessCategory: { years: [], rows: [] },
  industryCategory: { years: [], rows: [] },
};

export const ANALYSIS_TIME_RECORDS_QUERY: AnalysisTimeRecordsQuery = {
  s: DateTime.local().minus({ years: 3 }).toFormat('yyyy'),
  e: DateTime.local().toFormat('yyyy'),
};

export const ANALYSIS_USER_RECORDS_QUERY: AnalysisUserRecordsQuery = {
  s: DateTime.local().minus({ years: 3 }).toFormat('yyyy'),
  e: DateTime.local().toFormat('yyyy'),
};
