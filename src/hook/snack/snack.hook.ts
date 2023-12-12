import { useCallback, useEffect, useState } from 'react';

import { SnackEvent, SnackEventDetail } from '@service';
import { snackStore } from '@store';

export class SnackHook {
  ussEventListener() {
    const setSnack = snackStore.useSetState();

    const listener = useCallback(
      (e: Event) => {
        setSnack((prev) => [...prev, (e as SnackEvent).detail]);
      },
      [setSnack],
    );

    useEffect(() => {
      window.addEventListener(SnackEvent.EVENT_NAME, listener);

      return () => {
        window.removeEventListener(SnackEvent.EVENT_NAME, listener);
      };
    }, [listener]);
  }

  useDequeue() {
    const [snack, setSnack] = snackStore.useState();
    const [current, setCurrent] = useState<SnackEventDetail | null>(null);

    useEffect(() => {
      if (snack.length === 0) {
        return;
      }

      const current = snack[0];

      setCurrent(current);
      setSnack((prev) => prev.filter((snack) => snack.id !== current.id));
    }, [snack, setSnack, setCurrent]);

    return current;
  }
}

export const snackHook = new SnackHook();
