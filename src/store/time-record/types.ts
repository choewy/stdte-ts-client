import {
  DateTimeRowProperty,
  TimeRecordLogList,
  TimeRecordProjectList,
  TimeRecordRow,
  TimeRecordSumRow,
} from '@service';

export type TimeRecordStoreProps = {
  id: number;
  editable: boolean;
  sums: TimeRecordSumRow[];
  rows: TimeRecordRow[];
};

export type TimeRecordLayoutStoreProps = {
  id: number;
  editable: boolean;
  log: TimeRecordLogList;
  project: TimeRecordProjectList;
  date: {
    s: string;
    e: string;
    rows: DateTimeRowProperty[];
  };
};
