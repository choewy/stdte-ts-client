import { ChangeEvent, useCallback } from 'react';
import { SetterOrUpdater } from 'recoil';

export class TextFieldHook {
  useOnChangeObjectStrProperty<D extends object>(key: keyof D, setState: SetterOrUpdater<D>) {
    return useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        setState((prev) => ({ ...prev, [key]: e.target.value }));
      },
      [key, setState],
    );
  }
}

export const textFieldHook = new TextFieldHook();
