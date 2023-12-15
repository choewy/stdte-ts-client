import { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { SetterOrUpdater } from 'recoil';

export class ScrollHook {
  useOnScroll(ref: RefObject<HTMLDivElement>, setEnd: SetterOrUpdater<boolean>) {
    return useCallback(() => {
      console.log('scroll');
      if (ref.current == null) {
        return;
      }

      const clientHeight = ref.current.clientHeight;
      const scrollHeight = ref.current.scrollHeight;
      const scrollOffset = scrollHeight - clientHeight - 5;
      const scrollTop = ref.current.scrollTop;

      if (ref.current.dataset.mode === 'stop') {
        return;
      }

      if (scrollTop < scrollOffset) {
        return;
      }

      ref.current.dataset.mode = 'stop';
      setEnd(true);
    }, [ref, stop, setEnd]);
  }

  useDivScrollRefObject(): {
    ref: RefObject<HTMLDivElement>;
    end: boolean;
    setEnd: SetterOrUpdater<boolean>;
  } {
    const ref = useRef<HTMLDivElement | null>(null);
    const [end, setEnd] = useState<boolean>(false);

    useEffect(() => {
      if (ref.current == null) {
        return;
      }

      ref.current.dataset.mode = 'continue';
    }, [ref]);

    useEffect(() => {
      if (ref.current == null) {
        return;
      }

      if (end === false) {
        return;
      }

      const timeout = setTimeout(() => {
        clearTimeout(timeout);

        if (ref.current) {
          ref.current.dataset.mode = 'continue';
        }

        setEnd(false);
      }, 500);
    }, [stop, end, setEnd]);

    return { ref, end, setEnd };
  }
}

export const scrollHook = new ScrollHook();
