import { TimeMemoRow } from '@service';

export type TimeMemoStoreProps = {
  rows: TimeMemoRow[];
  dialog: {
    upsert: {
      open: boolean;
      row: TimeMemoRow;
    };
    delete: {
      open: boolean;
      row: TimeMemoRow;
    };
  };
};
