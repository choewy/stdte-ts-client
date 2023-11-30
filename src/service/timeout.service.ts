import { TimeoutKey } from '@common';

export class TimeoutService {
  private map: Record<TimeoutKey, NodeJS.Timeout | null> = {
    [TimeoutKey.SignOut]: null,
  };

  setTimeout(key: TimeoutKey, callback: () => void, milliseconds = 150): void {
    if (this.map[key]) {
      return;
    }

    this.map[key] = setTimeout(() => {
      callback();
      this.setClear(key);
    }, milliseconds);
  }

  setClear(key: TimeoutKey): void {
    const target = this.map[key];

    if (target) {
      clearTimeout(target);
      this.map[key] = null;
    }
  }
}

export const timeoutService = new TimeoutService();
