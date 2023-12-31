import { SocketService } from '@core';

import { TimeLogRow } from './types';
import { TimeLogSocketEventName } from './enums';
import { TimeLogEvent } from './time-log.event';

export class TimeLogSocketService extends SocketService {
  constructor() {
    super('timelog');
  }

  connection() {
    if (this.connected) {
      return;
    }

    this.on(TimeLogSocketEventName.Update, this.onUpdate.bind(this));

    this.connect();
  }

  private onUpdate(res: TimeLogRow) {
    TimeLogEvent.dispatchByUpdate(res);
  }
}

export const timeLogSocketService = new TimeLogSocketService();
