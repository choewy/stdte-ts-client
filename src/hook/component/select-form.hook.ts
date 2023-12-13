import { ReactNode, useCallback } from 'react';
import { SetterOrUpdater } from 'recoil';

import { SelectChangeEvent } from '@mui/material';

export class SelectFormHook {
  useOnChangeObjectProperty<D extends object>(key: keyof D, setState: SetterOrUpdater<D>) {
    return useCallback(
      (event: SelectChangeEvent<unknown>, _: ReactNode) => {
        setState((prev) => ({ ...prev, [key]: event.target.value }));
      },
      [key, setState],
    );
  }
}

export const selectFormHook = new SelectFormHook();
