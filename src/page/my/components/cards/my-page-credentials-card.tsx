import { FunctionComponent } from 'react';

import { Button, FormControl, TextField } from '@mui/material';

import { toCredentialsStatusText } from '@common';
import { profileStore } from '@store';
import { dialogHook } from '@hook';
import { MyProps } from '@props';

import { MyPageCard } from './my-page-card';

export const MyPageCredentialsCard: FunctionComponent = () => {
  const profile = profileStore.useValue();
  const onClick = dialogHook.useProfileUpdatePasswordDialogCallback(true);

  return (
    <MyPageCard title="계정">
      <FormControl {...MyProps.formControl({ sx: { flex: 1 } })}>
        <TextField
          {...MyProps.textField({
            label: '이메일',
            value: profile.credentials.email,
            InputProps: { readOnly: true },
          })}
        />
        <TextField
          {...MyProps.textField({
            label: '역할',
            value: profile.role?.name ?? '없음',
            InputProps: { readOnly: true },
          })}
        />
        <TextField
          {...MyProps.textField({
            label: '계정상태',
            value: toCredentialsStatusText(profile.credentials.status),
            InputProps: { readOnly: true },
          })}
        />
      </FormControl>
      <FormControl {...MyProps.formControl({})}>
        <Button {...MyProps.button({ onClick, children: '비밀번호 변경' })} />
      </FormControl>
    </MyPageCard>
  );
};
