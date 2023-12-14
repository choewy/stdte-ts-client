import { FunctionComponent } from 'react';

import { Button } from '@mui/material';

import { dialogHook } from '@hook';

export const CredentialsPageTableBodyRowChangePasswordButton: FunctionComponent<{
  id: number;
}> = ({ id }) => {
  const onClick = dialogHook.useCredentialsPageUpdatePasswordDialogCallback(id, true);

  return (
    <Button
      {...{
        children: '비밀번호 변경',
        fullWidth: false,
        size: 'small',
        onClick,
      }}
    />
  );
};
