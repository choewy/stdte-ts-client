import { TimeRecordOne } from './types';

export class TimeRecordEvent {
  static UPSERT = 'time_record_upsert';

  static dispatchByUpsert(detail: TimeRecordOne) {
    window.dispatchEvent(new CustomEvent(this.UPSERT, { detail }));
  }
}
