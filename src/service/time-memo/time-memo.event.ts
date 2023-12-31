import { TimeMemoRow } from './types';

export class TimeMemoEvent {
  static UPSERT = 'time_memo_upsert';
  static DELETE = 'time_memo_delete';

  static dispatchByUpsert(detail: TimeMemoRow) {
    window.dispatchEvent(new CustomEvent(this.UPSERT, { detail }));
  }

  static dispatchByDelete(detail: Pick<TimeMemoRow, 'id'>) {
    window.dispatchEvent(new CustomEvent(this.DELETE, { detail }));
  }
}
