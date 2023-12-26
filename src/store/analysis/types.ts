import {
  AnalysisProjectRecordList,
  AnalysisProjectRecordListQuery,
  AnalysisTimeRecordList,
  AnalysisTimeRecordsQuery,
  AnalysisUserRecordList,
  AnalysisUserRecordsQuery,
} from '@service';

export type AnalysisProjectRecordStoreProps = {
  tabIndex: keyof AnalysisProjectRecordList;
  head: string;
  query: AnalysisProjectRecordListQuery;
  list: AnalysisProjectRecordList;
};

export type AnalysisTimeRecordStoreProps = {
  query: AnalysisTimeRecordsQuery;
  list: AnalysisTimeRecordList;
};

export type AnalysisUserRecordStoreProps = {
  query: AnalysisUserRecordsQuery;
  list: AnalysisUserRecordList;
};
