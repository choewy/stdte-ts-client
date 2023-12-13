import { FunctionComponent } from 'react';

import { Button, FormControl, TextField } from '@mui/material';

import { MyProps } from '@props';
import { profileStore } from '@store';

import { MyPageCard } from './my-page-card';
import { profileHook, textFieldHook } from '@hook';

export const MyPageVehicleCard: FunctionComponent = () => {
  const profile = profileStore.useValue();

  const [body, setBody] = profileHook.useBehicleState(profile);

  const onChangeCarType = textFieldHook.useOnChangeObjectStrProperty('carType', setBody);
  const onChangeCarNumber = textFieldHook.useOnChangeObjectStrProperty('carNumber', setBody);

  return (
    <MyPageCard title="차량정보">
      <FormControl {...MyProps.formControl({ sx: { flex: 1 } })}>
        <TextField {...MyProps.textField({ label: '차종', value: body.carType, onChange: onChangeCarType })} />
        <TextField {...MyProps.textField({ label: '차량번호', value: body.carNumber, onChange: onChangeCarNumber })} />
      </FormControl>
      <FormControl {...MyProps.formControl({})}>
        <Button {...MyProps.button({ type: 'submit', children: '저장' })} />
      </FormControl>
    </MyPageCard>
  );
};
