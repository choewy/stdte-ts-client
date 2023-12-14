import { FunctionComponent } from 'react';
import { SetterOrUpdater } from 'recoil';

import { TextField } from '@mui/material';

import { textFieldHook } from '@hook';
import { CredentialsUpdatePasswordBody } from '@service';

export const MyPageUpdatePasswordDialogContent: FunctionComponent<{
  body: CredentialsUpdatePasswordBody;
  setBody: SetterOrUpdater<CredentialsUpdatePasswordBody>;
}> = ({ body, setBody }) => {
  const onChangeCurrentPassword = textFieldHook.useOnChangeObjectStrProperty('currentPassword', setBody);
  const onChangeNewPassword = textFieldHook.useOnChangeObjectStrProperty('newPassword', setBody);
  const onChangeConfirmPassword = textFieldHook.useOnChangeObjectStrProperty('confirmPassword', setBody);

  return (
    <>
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
    </>
  );
};
