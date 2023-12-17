import { FunctionComponent } from 'react';
import { SetterOrUpdater } from 'recoil';

import { TextField } from '@mui/material';

import { CustomerCreateBody } from '@service';
import { textFieldHook } from '@hook';

export const CustomerPageCreateDialogContent: FunctionComponent<{
  body: CustomerCreateBody;
  setBody: SetterOrUpdater<CustomerCreateBody>;
}> = ({ body, setBody }) => {
  const onChangeAlias = textFieldHook.useOnChangeObjectStrProperty('alias', setBody);
  const onChangeKr = textFieldHook.useOnChangeObjectStrProperty('kr', setBody);
  const onChangeEn = textFieldHook.useOnChangeObjectStrProperty('en', setBody);
  const onChangeDescription = textFieldHook.useOnChangeObjectStrProperty('description', setBody);

  return (
    <>
      <TextField {...{ label: '별칭', value: body.alias, onChange: onChangeAlias }} />
      <TextField {...{ label: '국문명', value: body.kr, onChange: onChangeKr }} />
      <TextField {...{ label: '영문명', value: body.en, onChange: onChangeEn }} />
      <TextField {...{ label: '비고', value: body.description, onChange: onChangeDescription }} />
    </>
  );
};
