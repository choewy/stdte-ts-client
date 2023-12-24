export type AnalysisProjectRecordListQuery = {
  s: string;
  e: string;
};

export type AnalysisProjectRecordYear = {
  year: string;
  amount: string;
};

export type AnalysisProjectRecordCol = {
  year: string;
  amount: string;
  rate: string;
};

export type AnalysisProjectRecordRow = {
  id: number;
  row: string;
  cols: AnalysisProjectRecordCol[];
};

export type AnalysisProjectRecordList = {
  total: string;
  years: AnalysisProjectRecordYear[];
  customer: AnalysisProjectRecordRow[];
  businessCategory: AnalysisProjectRecordRow[];
  industryCategory: AnalysisProjectRecordRow[];
};
