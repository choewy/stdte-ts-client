import './date-input.css';

import { FunctionComponent } from 'react';

import { TextField, TextFieldProps } from '@mui/material';

export const DateInput: FunctionComponent<
  TextFieldProps & {
    min?: string;
    max?: string;
  }
> = ({ min, max, ...props }) => {
  return (
    <TextField
      type="date"
      {...props}
      className="date-input"
      required
      inputProps={{
        ...(props.inputProps ?? {}, { min, max: max ?? '9999-12-31' }),
      }}
    />
  );
};
