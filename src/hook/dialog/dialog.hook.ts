import { useCallback } from 'react';

import { dialogStore } from '@store';

export class DialogHook {
  useProfileUpdatePasswordDialogCallback(open: boolean) {
    const setDialog = dialogStore.useSetState();

    return useCallback(() => {
      setDialog((prev) => ({
        ...prev,
        profile: {
          ...prev.profile,
          updatePassword: open,
        },
      }));
    }, [open, setDialog]);
  }
}

export const dialogHook = new DialogHook();
