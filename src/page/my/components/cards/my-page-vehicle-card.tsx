import { FunctionComponent } from 'react';

import { Button, FormControl, TextField } from '@mui/material';

import { profileStore } from '@store';
import { buttonHook, profileHook, textFieldHook } from '@hook';

import { MyPageCard } from './my-page-card';

export const MyPageVehicleCard: FunctionComponent = () => {
  const profile = profileStore.useValue();

  const [body, setBody] = profileHook.useBehicleState(profile);

  const onChangeCarType = textFieldHook.useOnChangeObjectStrProperty('carType', setBody);
  const onChangeCarNumber = textFieldHook.useOnChangeObjectStrProperty('carNumber', setBody);

  const disabled = buttonHook.useDisabled(profile, body);
  const onClick = profileHook.useUpdateBehicle(body);

  return (
    <MyPageCard title="차량정보">
      <FormControl {...{ sx: { flex: 1 } }}>
        <TextField
          {...{
            label: '차종',
            value: body.carType,
            onChange: onChangeCarType,
          }}
        />
        <TextField
          {...{
            label: '차량번호',
            value: body.carNumber,
            placeholder: '000가 0000',
            onChange: onChangeCarNumber,
          }}
        />
      </FormControl>
      <FormControl>
        <Button {...{ children: '저장', disabled, onClick }} />
      </FormControl>
    </MyPageCard>
  );
};
