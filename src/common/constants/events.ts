import { VariantType } from 'notistack';

import { EventType } from './enums';
import { ApiException, NotiEventDetail } from './types';
import { createKey } from './helpers';

export class NotiEvent extends CustomEvent<NotiEventDetail> {
  public static dispatchInfo(message: string): void {
    window.dispatchEvent(new NotiEvent('info', message));
  }

  public static dispatchSuccess(message: string): void {
    window.dispatchEvent(new NotiEvent('success', message));
  }

  public static dispatchWarning(message: string): void {
    window.dispatchEvent(new NotiEvent('warning', message));
  }

  public static dispatchError(message: string): void {
    window.dispatchEvent(new NotiEvent('error', message));
  }

  public static dispatchException(exception?: ApiException | null) {
    if (exception == null) {
      return;
    }

    if (isNaN(exception.statusCode)) {
      return;
    }

    window.dispatchEvent(new NotiEvent(exception.statusCode >= 500 ? 'error' : 'warning', exception.message));
  }

  constructor(variant: VariantType, message: string) {
    super(EventType.Noti, {
      detail: {
        id: createKey(['noti', variant].join('-')),
        variant,
        message,
      },
    });
  }
}
