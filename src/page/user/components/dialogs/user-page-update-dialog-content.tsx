import { FunctionComponent } from 'react';
import { SetterOrUpdater } from 'recoil';

import { Box, MenuItem, TextField } from '@mui/material';

import { Degree, UserStatus } from '@common';
import { DateInput, SelectControl } from '@component';
import { UserRowResponse, UserRowUpdateBody, enumService } from '@service';
import { selectFormHook, textFieldHook } from '@hook';

import { UserPageCard } from './user-page-card';

export const UserPageUpdateDialogContent: FunctionComponent<{
  row: UserRowResponse;
  body: UserRowUpdateBody;
  setBody: SetterOrUpdater<UserRowUpdateBody>;
}> = ({ row, body, setBody }) => {
  const onChangeName = textFieldHook.useOnChangeObjectStrProperty('name', setBody);
  const onChangeStatus = selectFormHook.useOnChangeObjectProperty('status', setBody);
  const onChangePhone = textFieldHook.useOnChangeObjectPhoneNumberProperty('phone', setBody);
  const onChangeScienceNumber = textFieldHook.useOnChangeObjectScienceNumberProperty('scienceNumber', setBody);
  const onChangeBirthday = textFieldHook.useOnChangeObjectStrProperty('birthday', setBody);
  const onChangeEnteringDay = textFieldHook.useOnChangeObjectStrProperty('enteringDay', setBody);
  const onChangeResignationDay = textFieldHook.useOnChangeObjectStrProperty('resignationDay', setBody);
  const onChangeDegree = selectFormHook.useOnChangeObjectProperty('degree', setBody);
  const onChangeSchool = textFieldHook.useOnChangeObjectStrProperty('school', setBody);
  const onChangeMajor = textFieldHook.useOnChangeObjectStrProperty('major', setBody);
  const onChangeCarType = textFieldHook.useOnChangeObjectStrProperty('carType', setBody);
  const onChangeCarNumber = textFieldHook.useOnChangeObjectStrProperty('carNumber', setBody);

  return (
    <Box sx={{ display: 'flex', gap: 2, height: '100%' }}>
      <UserPageCard title="기본정보">
        <TextField {...{ label: '이메일', value: row.credentials.email, InputProps: { readOnly: true } }} />
        <TextField {...{ label: '역할', value: row.role?.name ?? '없음', InputProps: { readOnly: true } }} />
        <SelectControl label="재직상태" value={body.status} onChange={onChangeStatus}>
          <MenuItem {...{ value: UserStatus.Wating, children: enumService.userStatusToText(UserStatus.Wating) }} />
          <MenuItem {...{ value: UserStatus.Active, children: enumService.userStatusToText(UserStatus.Active) }} />
          <MenuItem {...{ value: UserStatus.Vacate, children: enumService.userStatusToText(UserStatus.Vacate) }} />
          <MenuItem {...{ value: UserStatus.Retire, children: enumService.userStatusToText(UserStatus.Retire) }} />
        </SelectControl>
        <DateInput {...{ label: '입사일자', value: body.enteringDay, onChange: onChangeEnteringDay }} />
        <DateInput {...{ label: '퇴사일자', value: body.resignationDay, onChange: onChangeResignationDay }} />
      </UserPageCard>
      <UserPageCard title="인적사항">
        <TextField {...{ label: '이름', value: body.name, onChange: onChangeName }} />
        <DateInput {...{ label: '생년월일', value: body.birthday, onChange: onChangeBirthday }} />
        <TextField {...{ label: '연락처', value: body.phone, placeholder: '000-0000-0000', onChange: onChangePhone }} />
        <TextField
          {...{
            label: '과학기술인등록번호',
            value: body.scienceNumber,
            placeholder: '00000000',
            onChange: onChangeScienceNumber,
          }}
        />
      </UserPageCard>
      <UserPageCard title="학력사항">
        <SelectControl label="최종학력" value={body.degree} onChange={onChangeDegree}>
          <MenuItem {...{ value: Degree.HighSchool, children: enumService.degreeToText(Degree.HighSchool) }} />
          <MenuItem {...{ value: Degree.Bachelor2Years, children: enumService.degreeToText(Degree.Bachelor2Years) }} />
          <MenuItem {...{ value: Degree.Bachelor4Years, children: enumService.degreeToText(Degree.Bachelor4Years) }} />
          <MenuItem {...{ value: Degree.Master, children: enumService.degreeToText(Degree.Master) }} />
          <MenuItem {...{ value: Degree.Doctor, children: enumService.degreeToText(Degree.Doctor) }} />
        </SelectControl>
        <TextField {...{ label: '졸업학교', value: body.school, onChange: onChangeSchool }} />
        <TextField {...{ label: '전공학과', value: body.major, onChange: onChangeMajor }} />
      </UserPageCard>
      <UserPageCard title="차량정보">
        <TextField {...{ label: '차종', value: body.carType, onChange: onChangeCarType }} />
        <TextField
          {...{ label: '차량번호', value: body.carNumber, placeholder: '000가 0000', onChange: onChangeCarNumber }}
        />
      </UserPageCard>
    </Box>
  );
};
