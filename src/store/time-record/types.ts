import { DateTimeRowProperty, TimeRecordLogList, TimeRecordProjectList } from '@service';

export type TimeRecordStoreProps = {
  id: number;
  editable: boolean;
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
