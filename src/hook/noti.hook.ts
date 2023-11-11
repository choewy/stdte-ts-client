import { useCallback, useEffect, useState } from 'react';

import { NotiStore } from '@store';
import { EventType, NotiEvent, NotiEventDetail } from '@common';

export class NotiHook {
  private static instance = new NotiHook();

  public static getInstance() {
    return this.instance;
  }

  useListenEvent(): void {
    const setNotiStore = NotiStore.getInstance().useSetState();

    const handleEvent = useCallback(
      (e: Event) => {
        const event = e as NotiEvent;
        const noti = event.detail;

        setNotiStore((prev) => [...prev, noti]);
      },
      [setNotiStore],
    );

    useEffect(() => {
      window.addEventListener(EventType.Noti, handleEvent);

      return () => {
        window.removeEventListener(EventType.Noti, handleEvent);
      };
    }, [handleEvent]);
  }

  useConsume(): NotiEventDetail | null {
    const [notiStore, setNotiStore] = NotiStore.getInstance().useState();
    const [noti, setNoti] = useState<NotiEventDetail | null>(null);

    useEffect(() => {
      if (notiStore.length === 0) {
        return;
      }

      const noti = notiStore[0];

      setNoti(noti);
      setNotiStore((prev) => prev.filter(({ id }) => id !== noti.id));
    }, [notiStore, setNotiStore, setNoti]);

    return noti;
  }
}
