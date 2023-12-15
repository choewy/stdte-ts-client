import { useCallback } from 'react';

import { DIALOG_DEFAULT_ROLE_ROW, dialogStore } from '@store';
import { RoleAdminRowResponse } from '@service';

export class DialogHook {
  useMyPageUpdatePasswordDialogCallback(open: boolean) {
    const setDialog = dialogStore.useSetState();

    return useCallback(() => {
      setDialog((prev) => ({
        ...prev,
        mypage: {
          ...prev.mypage,
          updatePassword: { open },
        },
      }));
    }, [open, setDialog]);
  }

  useCredentialsPageUpdatePasswordDialogCallback(id: number, open: boolean) {
    const setDialog = dialogStore.useSetState();

    return useCallback(() => {
      setDialog((prev) => ({
        ...prev,
        credentials: {
          ...prev.credentials,
          updatePassword: {
            id: open === true ? id : 0,
            open,
          },
        },
      }));
    }, [id, open, setDialog]);
  }

  useRolePageCreateDialogCallback(open: boolean) {
    const setDialog = dialogStore.useSetState();

    return useCallback(() => {
      setDialog((prev) => ({
        ...prev,
        role: {
          ...prev.role,
          create: { open },
        },
      }));
    }, [open, setDialog]);
  }

  useRolePageDialogsCallback(key: 'update' | 'delete' | 'users', row: RoleAdminRowResponse, open: boolean) {
    const setDialog = dialogStore.useSetState();

    return useCallback(() => {
      setDialog((prev) => ({
        ...prev,
        role: {
          ...prev.role,
          [key]: { open, row: open === true ? row : DIALOG_DEFAULT_ROLE_ROW },
        },
      }));
    }, [key, row, open, setDialog]);
  }
}

export const dialogHook = new DialogHook();
