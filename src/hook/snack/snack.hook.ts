import { useEffect, useState } from 'react';

import { SnackEvent, SnackEventDetail } from '@service';
import { snackStore } from '@store';

export class SnackHook {
  ussEventListener() {
    const setSnack = snackStore.useSetState();

    useEffect(() => {
      const handleEvent = (e: Event) => {
        setSnack((prev) => [...prev, (e as SnackEvent).detail]);
      };

      window.addEventListener(SnackEvent.EVENT_NAME, handleEvent);

      return () => {
        window.removeEventListener(SnackEvent.EVENT_NAME, handleEvent);
      };
    }, [setSnack]);
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
