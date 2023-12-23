import './date-input.css';

import { FunctionComponent } from 'react';

import { TextField, TextFieldProps } from '@mui/material';

import { layoutStore } from '@store';

export const DateInput: FunctionComponent<
  TextFieldProps & {
    min?: string;
    max?: string;
  }
> = ({ min, max, ...props }) => {
  const { theme } = layoutStore.useValue();

  return (
    <TextField
      {...props}
      type="date"
      className="date-input"
      required
      inputProps={{
        ...(props.inputProps ?? {
          min,
          max: max ?? '9999-12-31',
          style: {
            fontSize: 13,
            colorScheme: theme === 'dark' ? 'dark' : 'light',
          },
        }),
      }}
    />
  );
};
