export type TimeRecordRowCategory = {
  parent: number;
  child: number;
};

export type TimeRecordRow = {
  id: number | null;
  date: string;
  time: string;
  project: number;
  category: TimeRecordRowCategory;
  createdAt: string;
  updatedAt: string;
};

export type TimeRecordListQuery = {
  user: number;
  s: string;
  e: string;
};

export type TimeRecordSumRow = {
  date: string;
  total: string;
};

export type TimeRecordList = {
  sums: TimeRecordSumRow[];
  rows: TimeRecordRow[];
};

export type TimeRecordOne = {
  sum: TimeRecordSumRow;
  row: TimeRecordRow;
};

export type TimeRecordUpsertBody = {
  id: number | null;
  date: string;
  time: string;
  user: number;
  project: number;
  taskMainCategory: number;
  taskSubCategory: number;
};
