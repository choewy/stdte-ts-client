import { TimeRecordRow, TimeRecordSumRow } from '@service';

export type TimeRecordStoreProps = {
  sums: TimeRecordSumRow[];
  rows: TimeRecordRow[];
};
