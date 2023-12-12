import { FunctionComponent } from 'react';

import { Button, ButtonProps, FormControl, TextField, TextFieldProps } from '@mui/material';
import { profileStore } from '@store';

import { MyPageCard } from './my-page-card';
import { toCredentialsStatusText } from '@common';
import { dialogHook } from '@hook';

const textFieldProps = (args: Pick<TextFieldProps, 'value' | 'label'>): TextFieldProps => ({
  fullWidth: true,
  margin: 'normal',
  InputProps: { readOnly: true },
  ...args,
});

const buttonProps = (args: Pick<ButtonProps, 'onClick'>): ButtonProps => ({
  fullWidth: true,
  variant: 'contained',
  size: 'large',
  ...args,
});

export const MyPageCredentialsCard: FunctionComponent = () => {
  const profile = profileStore.useValue();
  const onClick = dialogHook.useProfileUpdatePasswordDialogCallback(true);

  return (
    <MyPageCard title="계정정보">
      <TextField {...textFieldProps({ label: '이메일', value: profile.credentials.email })} />
      <TextField {...textFieldProps({ label: '역할', value: profile.role?.name ?? '없음' })} />
      <TextField
        {...textFieldProps({ label: '계정상태', value: toCredentialsStatusText(profile.credentials.status) })}
      />
      <FormControl fullWidth margin="normal">
        <Button {...buttonProps({ onClick })}>비밀번호 변경</Button>
      </FormControl>
    </MyPageCard>
  );
};
