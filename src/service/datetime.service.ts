import { DateTime } from 'luxon';

import { LuxonFormat } from '@common';

export class DateTimeService {
  private OFFSET = 1000 * 60 * 60 * 9;

  toFormat(plainText: string, format: LuxonFormat): string {
    return DateTime.fromMillis(new Date(plainText).getTime() + this.OFFSET).toFormat(format);
  }
}

export const dateTimeService = new DateTimeService();
