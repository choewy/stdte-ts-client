import { SocketService } from '@core';

import { TimeMemoSocketEventName } from './enums';
import { TimeMemoRow } from './types';
import { TimeMemoEvent } from './time-memo.event';

export class TimeMemoSocketService extends SocketService {
  constructor(query?: Record<string, unknown>) {
    super('timememo', query);
  }

  connection(id: number) {
    if (this.connected) {
      return;
    }

    Object.assign(this, new TimeMemoSocketService({ id }));

    this.on(TimeMemoSocketEventName.Upsert, this.onUpsert.bind(this));
    this.on(TimeMemoSocketEventName.Delete, this.onDelete.bind(this));

    this.connect();
  }

  private onUpsert(res: TimeMemoRow) {
    TimeMemoEvent.dispatchByUpsert(res);
  }

  private onDelete(res: Pick<TimeMemoRow, 'id'>) {
    TimeMemoEvent.dispatchByDelete(res);
  }
}

export const timeMemoSocketService = new TimeMemoSocketService();
