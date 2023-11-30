import { ChangeEvent, Dispatch, SetStateAction, useCallback } from 'react';

import { TextFieldProps } from '@mui/material';

export class TextFieldHook {
  useOnChangeText<T>(setState: Dispatch<SetStateAction<T>>): Pick<TextFieldProps, 'onChange'>['onChange'] {
    return useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;

        setState((prev) => ({ ...prev, [name]: value }));
      },
      [setState],
    );
  }
}

export const textFieldHook = new TextFieldHook();
