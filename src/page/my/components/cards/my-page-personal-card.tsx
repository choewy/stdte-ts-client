import { FunctionComponent } from 'react';

import { Button, FormControl, TextField } from '@mui/material';

import { profileStore } from '@store';
import { profileHook, textFieldHook } from '@hook';
import { MyProps } from '@props';

import { MyPageCard } from './my-page-card';

export const MyPagePersinalCard: FunctionComponent = () => {
  const profile = profileStore.useValue();

  const [body, setBody] = profileHook.usePersonalState(profile);

  const onChangeName = textFieldHook.useOnChangeObjectStrProperty('name', setBody);

  return (
    <MyPageCard title="인적사항">
      <FormControl {...MyProps.formControl({ sx: { flex: 1 } })}>
        <TextField {...MyProps.textField({ label: '이름', value: body.name, onChange: onChangeName })} />
        <TextField {...MyProps.textField({ label: '생년월일', value: body.birthday })} />
        <TextField {...MyProps.textField({ label: '연락처', value: body.phone })} />
        <TextField {...MyProps.textField({ label: '과학기술인등록번호', value: body.scienceNumber })} />
        <TextField {...MyProps.textField({ label: '입사일자', value: body.enteringDay })} />
        <TextField {...MyProps.textField({ label: '퇴사일자', value: body.resignationDay })} />
      </FormControl>
      <FormControl {...MyProps.formControl({})}>
        <Button {...MyProps.button({ type: 'submit', children: '저장' })} />
      </FormControl>
    </MyPageCard>
  );
};
