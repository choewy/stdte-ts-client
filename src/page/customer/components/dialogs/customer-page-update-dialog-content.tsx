import { FunctionComponent } from 'react';
import { SetterOrUpdater } from 'recoil';

import { TextField } from '@mui/material';

import { CustomerUpdateBody } from '@service';
import { textFieldHook } from '@hook';

export const CustomerPageUpdateDialogContent: FunctionComponent<{
  body: CustomerUpdateBody;
  setBody: SetterOrUpdater<CustomerUpdateBody>;
}> = ({ body, setBody }) => {
  const onChangeAlias = textFieldHook.useOnChangeObjectStrProperty(setBody, 'alias');
  const onChangeKr = textFieldHook.useOnChangeObjectStrProperty(setBody, 'kr');
  const onChangeEn = textFieldHook.useOnChangeObjectStrProperty(setBody, 'en');
  const onChangeDescription = textFieldHook.useOnChangeObjectStrProperty(setBody, 'description');

  return (
    <>
      <TextField {...{ label: '별칭', value: body.alias, onChange: onChangeAlias }} />
      <TextField {...{ label: '국문명', value: body.kr, onChange: onChangeKr }} />
      <TextField {...{ label: '영문명', value: body.en, onChange: onChangeEn }} />
      <TextField {...{ label: '비고', value: body.description, onChange: onChangeDescription }} />
    </>
  );
};
