import { FormEvent, FunctionComponent, useCallback } from 'react';

import { Box, Button, FormControl, TextField } from '@mui/material';

import { credentialsHook, dialogHook, textFieldHook } from '@hook';

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
    <Box component="form" onSubmit={onSubmit}>
      <FormControl>
        <TextField
          {...{
            type: 'password',
            label: '현재 비밀번호',
            value: body.currentPassword,
            onChange: onChangeCurrentPassword,
          }}
        />
        <TextField
          {...{
            type: 'password',
            label: '새 비밀번호',
            value: body.newPassword,
            onChange: onChangeNewPassword,
          }}
        />
        <TextField
          {...{
            type: 'password',
            label: '비밀번호 확인',
            value: body.confirmPassword,
            onChange: onChangeConfirmPassword,
          }}
        />
      </FormControl>
      <FormControl>
        <Button {...{ type: 'submit', children: '변경하기' }} />
      </FormControl>
    </Box>
  );
};
