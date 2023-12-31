import { DateTimeRowProperty, TimeLogRow, TimeProjectRow } from '@service';

export type TimeLayoutStoreProps = {
  id: number;
  editable: boolean;
  loadable: boolean;
  date: {
    s: string;
    e: string;
    rows: DateTimeRowProperty[];
  };
  log: { rows: TimeLogRow[] };
  project: { rows: TimeProjectRow[] };
};
