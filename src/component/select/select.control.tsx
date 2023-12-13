import { FormControl, InputLabel, Select, SelectProps } from '@mui/material';

export function SelectControl<D>({ children, ...props }: SelectProps<D>) {
  return (
    <FormControl margin="dense">
      <InputLabel>{props.label}</InputLabel>
      <Select margin="dense" {...props}>
        {children}
      </Select>
    </FormControl>
  );
}
