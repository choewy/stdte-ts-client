import { v4 } from 'uuid';

import { LoadingEventDetail } from './types';

export class LoadingEvent extends CustomEvent<LoadingEventDetail> {
  static EVENT_NAME = [v4(), 'loading'].join('_');

  static dispatch(open: boolean, delay = 0) {
    setTimeout(() => {
      window.dispatchEvent(
        new LoadingEvent(this.EVENT_NAME, {
          detail: open,
        }),
      );
    }, delay);
  }
}
