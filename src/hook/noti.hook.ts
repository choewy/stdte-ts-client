import { useCallback, useEffect, useState } from 'react';

import { NotiEventsStoreValueGenerator, notiEventsStore } from '@store';
import { EventType, NotiEvent, NotiEventDetail } from '@common';

export class NotiHook {
  useListenEvent(): void {
    const setNotiEvents = notiEventsStore.useSetState();

    const handleEvent = useCallback(
      (e: Event) => {
        const event = e as NotiEvent;
        const noti = event.detail;

        setNotiEvents((prev) => new NotiEventsStoreValueGenerator(prev).append(noti));
      },
      [setNotiEvents],
    );

    useEffect(() => {
      window.addEventListener(EventType.Noti, handleEvent);

      return () => {
        window.removeEventListener(EventType.Noti, handleEvent);
      };
    }, [handleEvent]);
  }

  useConsume(): NotiEventDetail | null {
    const [notiEvents, setNotiEvents] = notiEventsStore.useState();
    const [noti, setNoti] = useState<NotiEventDetail | null>(null);

    useEffect(() => {
      if (notiEvents.length === 0) {
        return;
      }

      const noti = notiEvents[0];

      setNoti(noti);
      setNotiEvents((prev) => new NotiEventsStoreValueGenerator(prev).remove(noti.id));
    }, [notiEvents, setNotiEvents, setNoti]);

    return noti;
  }
}

export const notiHook = new NotiHook();
