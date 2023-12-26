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

export type AnalysisTimeRecordYearRow = {
  year: string;
  time: string;
};

export type AnalysisTimeRecordProjectCol = {
  year: string;
  time: string;
};

export type AnalysisTimeRecordProjectRow = {
  id: number;
  name: string;
  code: string;
  cols: AnalysisTimeRecordProjectCol[];
};

export type AnalysisTimeRecordUserCol = {
  uid: number;
  pid: number;
  year: string;
  time: string;
};

export type AnalysisTimeRecordUserRow = {
  id: number;
  name: string;
  cols: AnalysisTimeRecordUserCol[];
};

export type AnalysisTimeRecordList = {
  years: AnalysisTimeRecordYearRow[];
  users: AnalysisTimeRecordUserRow[];
  projects: AnalysisTimeRecordProjectRow[];
};

export type AnalysisUserRecordsQuery = {
  s: string;
  e: string;
};

export type AnalysisUserRecordYearRow = {
  year: string;
  months: number;
  days: number;
  avgMonths: number;
  avgDays: number;
  active: number;
  enter: number;
  leave: number;
};

export type AnalysisUserRecordUserCol = {
  year: string;
  months: number;
  days: number;
};

export type AnalysisUserRecordUserRow = {
  id: number;
  name: string;
  enteringDay: string;
  resignationDay: string;
  cols: AnalysisUserRecordUserCol[];
};

export type AnalysisUserRecordList = {
  years: AnalysisUserRecordYearRow[];
  users: AnalysisUserRecordUserRow[];
};
