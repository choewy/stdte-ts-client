import { FunctionComponent } from 'react';
import { SetterOrUpdater } from 'recoil';

import { TextField } from '@mui/material';

import { textFieldHook } from '@hook';
import { BusinessCategoryUpdateBody } from '@service';

export const BusinessCategoryPageUpdateDialogContent: FunctionComponent<{
  body: BusinessCategoryUpdateBody;
  setBody: SetterOrUpdater<BusinessCategoryUpdateBody>;
}> = ({ body, setBody }) => {
  const onChangeName = textFieldHook.useOnChangeObjectStrProperty('name', setBody);
  const onChangeDescription = textFieldHook.useOnChangeObjectStrProperty('description', setBody);

  return (
    <>
      <TextField {...{ label: '사업구분명', value: body.name, onChange: onChangeName }} />
      <TextField {...{ label: '비고', value: body.description, onChange: onChangeDescription }} />
    </>
  );
};
