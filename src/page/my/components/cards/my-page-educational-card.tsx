import { FunctionComponent } from 'react';

import { Button, FormControl, MenuItem, TextField } from '@mui/material';

import { Degree } from '@common';
import { SelectControl } from '@component';
import { enumService } from '@service';
import { profileStore } from '@store';
import { buttonHook, profileHook, selectFormHook, textFieldHook } from '@hook';

import { MyPageCard } from './my-page-card';

export const MyPageEducationalCard: FunctionComponent = () => {
  const profile = profileStore.useValue();

  const [body, setBody] = profileHook.useEducationalState(profile);

  const onChangeDegree = selectFormHook.useOnChangeObjectProperty('degree', setBody);
  const onChangeSchool = textFieldHook.useOnChangeObjectStrProperty('school', setBody);
  const onChangeMajor = textFieldHook.useOnChangeObjectStrProperty('major', setBody);

  const disabled = buttonHook.useDisabledByObject(profile, body);
  const onClick = profileHook.useUpdateEducational(body);

  return (
    <MyPageCard title="학력사항">
      <FormControl {...{ sx: { flex: 1 } }}>
        <SelectControl label="최종학력" value={body.degree} onChange={onChangeDegree}>
          <MenuItem {...{ value: Degree.HighSchool, children: enumService.degreeToText(Degree.HighSchool) }} />
          <MenuItem {...{ value: Degree.Bachelor2Years, children: enumService.degreeToText(Degree.Bachelor2Years) }} />
          <MenuItem {...{ value: Degree.Bachelor4Years, children: enumService.degreeToText(Degree.Bachelor4Years) }} />
          <MenuItem {...{ value: Degree.Master, children: enumService.degreeToText(Degree.Master) }} />
          <MenuItem {...{ value: Degree.Doctor, children: enumService.degreeToText(Degree.Doctor) }} />
        </SelectControl>
        <TextField {...{ label: '졸업학교', value: body.school, onChange: onChangeSchool }} />
        <TextField {...{ label: '전공학과', value: body.major, onChange: onChangeMajor }} />
      </FormControl>
      <FormControl>
        <Button {...{ children: '저장', disabled, onClick }} />
      </FormControl>
    </MyPageCard>
  );
};
