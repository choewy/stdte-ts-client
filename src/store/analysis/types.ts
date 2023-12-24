import { AnalysisProjectRecordList, AnalysisProjectRecordListQuery } from '@service';

export type AnalysisProjectRecordStoreProps = {
  tabIndex: keyof AnalysisProjectRecordList;
  head: string;
  query: AnalysisProjectRecordListQuery;
  list: AnalysisProjectRecordList;
};
