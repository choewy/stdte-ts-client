import { TimeMemoRow } from '@service';

export type TimeMemoStoreProps = {
  id: number;
  editable: boolean;
  rows: TimeMemoRow[];
};
