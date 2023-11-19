import { useCallback, useEffect, useState } from 'react';

export class DocumentHook {
  useResponsiveSize(heightMargin = 0, widthMargin = 0) {
    const [height, setHeight] = useState<number>(window.innerHeight - heightMargin);
    const [width, setWidth] = useState<number>(window.innerWidth - widthMargin);

    const onResize = useCallback(() => {
      setHeight(window.innerHeight - heightMargin);
      setWidth(window.innerWidth - widthMargin);
    }, [heightMargin, widthMargin]);

    useEffect(() => {
      window.addEventListener('resize', onResize);

      return () => window.removeEventListener('resize', onResize);
    }, [onResize]);

    return { height, width };
  }
}

export const documentHook = new DocumentHook();
