import { ReactNode, useCallback } from 'react';
import { SetterOrUpdater } from 'recoil';

import { SelectChangeEvent } from '@mui/material';
import { RolePolicyProperty } from '@common';

export class SelectFormHook {
  useOnChangeObjectProperty<D extends object>(key: keyof D, setState: SetterOrUpdater<D>) {
    return useCallback(
      (event: SelectChangeEvent<unknown>, _: ReactNode) => {
        setState((prev) => ({ ...prev, [key]: event.target.value }));
      },
      [key, setState],
    );
  }

  useOnChangeRolePolicyProperty<D extends { rolePolicy: RolePolicyProperty }>(
    key: keyof RolePolicyProperty,
    setState: SetterOrUpdater<D>,
  ) {
    return useCallback(
      (event: SelectChangeEvent<unknown>, _: ReactNode) => {
        setState((prev) => ({
          ...prev,
          rolePolicy: {
            ...prev.rolePolicy,
            [key]: event.target.value,
          },
        }));
      },
      [key, setState],
    );
  }

  useOnChangeObjectArrayProperty<D extends object>(setState: SetterOrUpdater<D>, key: keyof D) {
    return useCallback(
      (event: SelectChangeEvent<unknown>, _: ReactNode) => {
        setState((prev) => {
          return {
            ...prev,
            [key]: event.target.value,
          };
        });
      },
      [key, setState],
    );
  }
}

export const selectFormHook = new SelectFormHook();
