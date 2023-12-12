import { FormEvent, FunctionComponent, useCallback } from 'react';

import { Box, Button, ButtonProps, TextField, TextFieldProps } from '@mui/material';

import { credentialsHook, dialogHook, textFieldHook } from '@hook';

const textFieldProps = (args: Pick<TextFieldProps, 'label' | 'value' | 'onChange'>): TextFieldProps => ({
  type: 'password',
  margin: 'normal',
  required: true,
  fullWidth: true,
  autoComplete: 'off',
  ...args,
});

const buttonProps = (): ButtonProps => ({
  type: 'submit',
  fullWidth: true,
  variant: 'contained',
  size: 'large',
  sx: { mt: 3, mb: 2 },
});

export const MyPageUpdatePAsswordDialogContent: FunctionComponent = () => {
  const [body, setBody] = credentialsHook.useUpdateMyPasswordState();

  const onChangeCurrentPassword = textFieldHook.useOnChangeObjectStrProperty('currentPassword', setBody);
  const onChangeNewPassword = textFieldHook.useOnChangeObjectStrProperty('newPassword', setBody);
  const onChangeConfirmPassword = textFieldHook.useOnChangeObjectStrProperty('confirmPassword', setBody);

  const updatePassword = credentialsHook.useUpdatePasswordCallback(body);
  const closeDialog = dialogHook.useProfileUpdatePasswordDialogCallback(false);

  const onSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const ok = await updatePassword();

      if (ok) {
        closeDialog();
      }
    },
    [updatePassword, closeDialog],
  );

  return (
    <Box component="form" noValidate onSubmit={onSubmit}>
      <TextField
        {...textFieldProps({
          label: '현재 비밀번호',
          value: body.currentPassword,
          onChange: onChangeCurrentPassword,
        })}
      />
      <TextField
        {...textFieldProps({
          label: '새 비밀번호',
          value: body.newPassword,
          onChange: onChangeNewPassword,
        })}
      />
      <TextField
        {...textFieldProps({
          label: '비밀번호 확인',
          value: body.confirmPassword,
          onChange: onChangeConfirmPassword,
        })}
      />
      <Button {...buttonProps()}>변경하기</Button>
    </Box>
  );
};
