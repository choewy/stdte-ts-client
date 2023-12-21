import { DateTime } from 'luxon';
import { DateTimeRowProperty } from './types';

export class DateTimeService {
  private readonly WEEK_DAYS: Pick<DateTimeRowProperty, 'weekday' | 'color'>[] = [
    { weekday: '월', color: '#000' },
    { weekday: '화', color: '#000' },
    { weekday: '수', color: '#000' },
    { weekday: '목', color: '#000' },
    { weekday: '금', color: '#000' },
    { weekday: '토', color: '#00f' },
    { weekday: '일', color: '#f00' },
  ];

  getDateTimeRowsByRange(s: string, e: string) {
    const sd = DateTime.fromISO(s);
    const ed = DateTime.fromISO(e);

    if (sd.isValid === false || ed.isValid === false) {
      return [];
    }

    const rows: DateTimeRowProperty[] = [];
    const days = ed.diff(sd, 'days').get('days');

    for (let day = 0; day <= days; day++) {
      const datetime = sd.plus({ day });
      const date = datetime.toSQLDate();

      rows.push({ date, ...this.WEEK_DAYS[datetime.weekday - 1] });
    }

    return rows;
  }
}

export const datetimeService = new DateTimeService();
