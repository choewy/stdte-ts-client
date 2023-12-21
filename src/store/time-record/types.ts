import {
  DateTimeRowProperty,
  TimeRecordLogList,
  TimeRecordProjectList,
  TimeRecordRow,
  TimeRecordSumRow,
} from '@service';

export type TimeRecordStoreProps = {
  id: number;
  load: boolean;
  editable: boolean;
  sums: TimeRecordSumRow[];
  rows: TimeRecordRow[];
};

export type TimeRecordLayoutStoreProps = {
  log: TimeRecordLogList;
  project: TimeRecordProjectList;
  date: {
    s: string;
    e: string;
    rows: DateTimeRowProperty[];
  };
};
