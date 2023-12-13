import { FunctionComponent } from 'react';

import { Button, FormControl, TextField } from '@mui/material';

import { profileStore } from '@store';
import { profileHook, textFieldHook } from '@hook';
import { MyProps } from '@props';

import { MyPageCard } from './my-page-card';

export const MyPageEducationalCard: FunctionComponent = () => {
  const profile = profileStore.useValue();

  const [body, setBody] = profileHook.useEducationalState(profile);

  const onChangeSchool = textFieldHook.useOnChangeObjectStrProperty('school', setBody);
  const onChangeMajor = textFieldHook.useOnChangeObjectStrProperty('major', setBody);

  return (
    <MyPageCard title="학력">
      <FormControl {...MyProps.formControl({ sx: { flex: 1 } })}>
        <TextField {...MyProps.textField({ label: '최종학력', value: body.degree })} />
        <TextField {...MyProps.textField({ label: '졸업학교', value: body.school, onChange: onChangeSchool })} />
        <TextField {...MyProps.textField({ label: '전공학과', value: body.major, onChange: onChangeMajor })} />
      </FormControl>
      <FormControl {...MyProps.formControl({})}>
        <Button {...MyProps.button({ type: 'submit', children: '저장' })} />
      </FormControl>
    </MyPageCard>
  );
};
