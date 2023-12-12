import { useCallback } from 'react';

import { layoutStore } from '@store';

export class LayoutHook {
  useHeaderIconButtonClickCallback() {
    const setLayout = layoutStore.useSetState();

    return useCallback(() => {
      setLayout((prev) => ({ ...prev, sidebar: { open: true } }));
    }, [setLayout]);
  }
}

export const layoutHook = new LayoutHook();
