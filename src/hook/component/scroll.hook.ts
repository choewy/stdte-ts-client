import { RefObject, useCallback, useEffect, useRef, useState } from 'react';

export class ScrollHook {
  useDivScrollRefObject(): {
    ref: RefObject<HTMLDivElement>;
    end: boolean;
  } {
    const ref = useRef<HTMLDivElement | null>(null);
    const stop = useRef<boolean>(false);

    const [end, setEnd] = useState<boolean>(false);

    const onScroll = useCallback(() => {
      if (ref.current == null) {
        return;
      }

      const clientHeight = ref.current.clientHeight;
      const scrollHeight = ref.current.scrollHeight;
      const scrollOffset = scrollHeight - clientHeight - 5;
      const scrollTop = ref.current.scrollTop;

      if (stop.current === true) {
        return;
      }

      if (scrollTop < scrollOffset) {
        return;
      }

      stop.current = true;
      setEnd(stop.current);
    }, [ref, top, stop, setEnd]);

    useEffect(() => {
      if (ref.current == null) {
        return;
      }

      ref.current.addEventListener('scroll', onScroll);

      return () => {
        if (ref.current == null) {
          return;
        }

        ref.current.removeEventListener('scroll', onScroll);
      };
    }, [ref, onScroll]);

    useEffect(() => {
      if (end === false) {
        return;
      }

      const timeout = setTimeout(() => {
        clearTimeout(timeout);
        stop.current = false;
        setEnd(stop.current);
      }, 500);
    }, [stop, end, setEnd]);

    return { ref, end };
  }
}

export const scrollHook = new ScrollHook();
