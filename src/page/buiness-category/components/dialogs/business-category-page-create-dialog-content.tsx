import { FunctionComponent } from 'react';
import { SetterOrUpdater } from 'recoil';

import { TextField } from '@mui/material';

import { textFieldHook } from '@hook';
import { BusinessCategoryCreateBody } from '@service';

export const BusinessCategoryPageCreateDialogContent: FunctionComponent<{
  body: BusinessCategoryCreateBody;
  setBody: SetterOrUpdater<BusinessCategoryCreateBody>;
}> = ({ body, setBody }) => {
  const onChangeName = textFieldHook.useOnChangeObjectStrProperty(setBody, 'name');
  const onChangeDescription = textFieldHook.useOnChangeObjectStrProperty(setBody, 'description');

  return (
    <>
      <TextField {...{ label: '사업구분명', value: body.name, onChange: onChangeName }} />
      <TextField {...{ label: '비고', value: body.description, onChange: onChangeDescription }} />
    </>
  );
};
