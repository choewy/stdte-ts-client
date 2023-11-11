import { Dispatch, SetStateAction, useCallback } from 'react';

import { TextFieldProps } from '@mui/material';

export class TextFieldHook {
  private static instance = new TextFieldHook();

  public static getInstance() {
    return this.instance;
  }

  useOnChangeText<T>(setState: Dispatch<SetStateAction<T>>): Pick<TextFieldProps, 'onChange'>['onChange'] {
    return useCallback(
      (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setState((prev) => ({ ...prev, [name]: value }));
      },
      [setState],
    );
  }
}
