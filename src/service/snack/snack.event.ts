import { v4 } from 'uuid';
import { VariantType } from 'notistack';

import { SnackEventDetail } from './types';

export class SnackEvent extends CustomEvent<SnackEventDetail> {
  static EVENT_NAME = 'snack_push';

  constructor(variant: VariantType, message: string) {
    super(SnackEvent.EVENT_NAME, {
      detail: {
        id: v4(),
        variant,
        message,
      },
    });
  }
}
