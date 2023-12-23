import { SocketService } from '@core';

export class TimeRecordLogSocketService extends SocketService {}

export const timeRecordLogSocketService = new TimeRecordLogSocketService('timelog');
