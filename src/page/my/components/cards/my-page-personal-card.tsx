import { FunctionComponent } from 'react';

import { Button, FormControl, TextField } from '@mui/material';

import { DateInput } from '@component';
import { profileStore } from '@store';
import { buttonHook, profileHook, textFieldHook } from '@hook';

import { MyPageCard } from './my-page-card';

export const MyPagePersinalCard: FunctionComponent = () => {
  const profile = profileStore.useValue();

  const [body, setBody] = profileHook.usePersonalState(profile);

  const onChangeName = textFieldHook.useOnChangeObjectStrProperty(setBody, 'name');
  const onChangePhone = textFieldHook.useOnChangeObjectPhoneNumberProperty('phone', setBody);
  const onChangeScienceNumber = textFieldHook.useOnChangeObjectScienceNumberProperty('scienceNumber', setBody);
  const onChangeBirthday = textFieldHook.useOnChangeObjectStrProperty(setBody, 'birthday');
  const onChangeEnteringDay = textFieldHook.useOnChangeObjectStrProperty(setBody, 'enteringDay');
  const onChangeResignationDay = textFieldHook.useOnChangeObjectStrProperty(setBody, 'resignationDay');

  const disabled = buttonHook.useDisabledByObject(profile, body);
  const onClick = profileHook.useUpdatePersonal(body);

  return (
    <MyPageCard title="인적사항">
      <FormControl {...{ sx: { flex: 1 } }}>
        <TextField
          {...{
            label: '이름',
            value: body.name,
            onChange: onChangeName,
          }}
        />
        <DateInput
          {...{
            label: '생년월일',
            value: body.birthday,
            onChange: onChangeBirthday,
          }}
        />
        <TextField
          {...{
            label: '연락처',
            value: body.phone,
            placeholder: '000-0000-0000',
            onChange: onChangePhone,
          }}
        />
        <TextField
          {...{
            label: '과학기술인등록번호',
            value: body.scienceNumber,
            placeholder: '00000000',
            onChange: onChangeScienceNumber,
          }}
        />
        <DateInput
          {...{
            label: '입사일자',
            value: body.enteringDay,
            onChange: onChangeEnteringDay,
          }}
        />
        <DateInput
          {...{
            label: '퇴사일자',
            value: body.resignationDay,
            onChange: onChangeResignationDay,
          }}
        />
      </FormControl>
      <FormControl>
        <Button {...{ children: '저장', disabled, onClick }} />
      </FormControl>
    </MyPageCard>
  );
};
