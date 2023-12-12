import { v4 } from 'uuid';

import { HttpClientException } from '@core';

import { SnackEventDetail } from './types';

export class SnackEvent extends CustomEvent<SnackEventDetail> {
  static EVENT_NAME = 'snack_push';

  static dispatchByInfo(message: string) {
    window.dispatchEvent(
      new SnackEvent(this.EVENT_NAME, {
        detail: { id: v4(), variant: 'info', message },
      }),
    );
  }

  static dispatchBySuccess(message: string) {
    window.dispatchEvent(
      new SnackEvent(this.EVENT_NAME, {
        detail: { id: v4(), variant: 'success', message },
      }),
    );
  }

  static dispatchByWarning(message: string) {
    window.dispatchEvent(
      new SnackEvent(this.EVENT_NAME, {
        detail: { id: v4(), variant: 'warning', message },
      }),
    );
  }

  static dispatchByError(message: string) {
    window.dispatchEvent(
      new SnackEvent(this.EVENT_NAME, {
        detail: { id: v4(), variant: 'error', message },
      }),
    );
  }

  static dispatchByException(exception: HttpClientException) {
    window.dispatchEvent(
      new SnackEvent(this.EVENT_NAME, {
        detail: { id: v4(), variant: exception.status < 500 ? 'warning' : 'error', message: exception.message },
      }),
    );
  }
}
