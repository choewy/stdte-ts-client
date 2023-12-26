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
  customer: {
    years: AnalysisProjectRecordYear[];
    rows: AnalysisProjectRecordRow[];
  };
  businessCategory: {
    years: AnalysisProjectRecordYear[];
    rows: AnalysisProjectRecordRow[];
  };
  industryCategory: {
    years: AnalysisProjectRecordYear[];
    rows: AnalysisProjectRecordRow[];
  };
};

export type AnalysisTimeRecordsQuery = {
  s: string;
  e: string;
};

export type AnalysisTimeRecordYear = {
  year: string;
  time: string;
};

export type AnalysisTimeRecordRow = {
  id: number;
  name: string;
  year: string;
  time: string;
};

export type AnalysisTimeRecord = {
  id: number;
  name: string;
  code: string;
  years: AnalysisTimeRecordYear[];
  rows: AnalysisTimeRecordRow[];
};
