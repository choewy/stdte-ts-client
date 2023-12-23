import { SocketService } from '@core';

import { TimeRecordLogSocketEventName } from './enums';
import { TimeRecordLogRow } from './types';
import { TimeRecordLogEvent } from './time-record-log.event';

export class TimeRecordLogSocketService extends SocketService {
  constructor() {
    super('timelog');
  }

  connection() {
    if (this.connected) {
      return;
    }

    this.on(TimeRecordLogSocketEventName.Update, this.onUpdate.bind(this));
    this.connect();
  }

  disconnection() {
    if (this.disconnected) {
      return;
    }

    this.disconnect();
  }

  private onUpdate(res: TimeRecordLogRow) {
    TimeRecordLogEvent.dispatchByUpdate(res);
  }
}

export const timeRecordLogSocketService = new TimeRecordLogSocketService();
