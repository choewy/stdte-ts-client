import { FunctionComponent } from 'react';

import { TextField } from '@mui/material';

import { textFieldHook } from '@hook';
import { CredentialsAdminUpdatePasswordBody } from '@service';
import { SetterOrUpdater } from 'recoil';

export const CredentialsPageUpdatePasswordDialogContent: FunctionComponent<{
  body: CredentialsAdminUpdatePasswordBody;
  setBody: SetterOrUpdater<CredentialsAdminUpdatePasswordBody>;
}> = ({ body, setBody }) => {
  const onChangeNewPassword = textFieldHook.useOnChangeObjectStrProperty('newPassword', setBody);
  const onChangeConfirmPassword = textFieldHook.useOnChangeObjectStrProperty('confirmPassword', setBody);

  return (
    <>
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
