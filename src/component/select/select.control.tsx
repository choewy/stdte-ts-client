import { FormControl, InputLabel, Select, SelectProps } from '@mui/material';

export function SelectControl<D>({ children, ...props }: Readonly<SelectProps<D>>) {
  return (
    <FormControl margin={props.margin ?? 'normal'} sx={props.sx}>
      <InputLabel>{props.label}</InputLabel>
      <Select margin="dense" {...props}>
        {children}
      </Select>
    </FormControl>
  );
}
