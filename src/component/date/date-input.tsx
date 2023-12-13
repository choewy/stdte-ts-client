import './date-input.css';

import { FunctionComponent } from 'react';

import { TextField, TextFieldProps } from '@mui/material';

export const DateInput: FunctionComponent<TextFieldProps> = (props) => {
  return (
    <TextField
      {...{
        type: 'date',
        className: 'date-input',
        required: true,
        ...props,
      }}
    />
  );
};
