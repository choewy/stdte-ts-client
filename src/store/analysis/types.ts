import {
  AnalysisProjectRecordList,
  AnalysisProjectRecordListQuery,
  AnalysisTimeRecord,
  AnalysisTimeRecordsQuery,
} from '@service';

export type AnalysisProjectRecordStoreProps = {
  tabIndex: keyof AnalysisProjectRecordList;
  head: string;
  query: AnalysisProjectRecordListQuery;
  list: AnalysisProjectRecordList;
};

export type AnalysisTimeRecordStoreProps = {
  tabIndex: number;
  query: AnalysisTimeRecordsQuery;
  results: AnalysisTimeRecord[];
};
