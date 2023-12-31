import { TimeLogRow } from './types';

export class TimeLogEvent {
  static UPDATE = 'time_record_log_update';

  static dispatchByUpdate(detail: TimeLogRow) {
    window.dispatchEvent(new CustomEvent(this.UPDATE, { detail }));
  }
}
