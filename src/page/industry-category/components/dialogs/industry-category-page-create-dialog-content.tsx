import { FunctionComponent } from 'react';
import { SetterOrUpdater } from 'recoil';

import { TextField } from '@mui/material';

import { textFieldHook } from '@hook';
import { IndustryCategoryCreateBody } from '@service';

export const IndustryCategoryPageCreateDialogContent: FunctionComponent<{
  body: IndustryCategoryCreateBody;
  setBody: SetterOrUpdater<IndustryCategoryCreateBody>;
}> = ({ body, setBody }) => {
  const onChangeName = textFieldHook.useOnChangeObjectStrProperty(setBody, 'name');
  const onChangeDescription = textFieldHook.useOnChangeObjectStrProperty(setBody, 'description');

  return (
    <>
      <TextField {...{ label: '산업분야명', value: body.name, onChange: onChangeName }} />
      <TextField {...{ label: '비고', value: body.description, onChange: onChangeDescription }} />
    </>
  );
};
