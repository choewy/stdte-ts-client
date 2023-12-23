import { SocketService } from '@core';

import { TimeRecordSocketEventName } from './enums';
import { TimeRecordOne } from './types';
import { TimeRecordEvent } from './time-record.event';

export class TimeRecordSocketService extends SocketService {
  constructor(query?: Record<string, unknown>) {
    super('timerecord', query);
  }

  connection(id: number) {
    if (this.connected) {
      return;
    }

    Object.assign(this, new TimeRecordSocketService({ id }));

    this.on(TimeRecordSocketEventName.Upsert, this.onUpsert.bind(this));
    this.connect();
  }

  disconnection() {
    if (this.disconnected) {
      return;
    }

    this.disconnect();
  }

  private onUpsert(res: TimeRecordOne) {
    TimeRecordEvent.dispatchByUpsert(res);
  }
}

export const timeRecordSocketService = new TimeRecordSocketService();
