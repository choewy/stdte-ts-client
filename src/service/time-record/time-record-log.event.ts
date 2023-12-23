import { TimeRecordLogRow } from './types';

export class TimeRecordLogEvent {
  static UPDATE = 'time_record_log_update';

  static dispatchByUpdate(detail: TimeRecordLogRow) {
    window.dispatchEvent(new CustomEvent(this.UPDATE, { detail }));
  }
}
