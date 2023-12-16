import { FunctionComponent } from 'react';

import { Link } from '@mui/material';

import { sizeService } from '@service';
import { dialogHook } from '@hook';

export const CredentialsPageTableBodyRowChangePasswordButton: FunctionComponent<{
  id: number;
}> = ({ id }) => {
  const text = '비밀번호변경';

  const onClick = dialogHook.useCredentialsPageUpdatePasswordDialogCallback(id, true);

  return (
    <Link
      {...{
        children: text,
        onClick,
        sx: sizeService.getWidthByTextLength(
          text,
          { width: true, minWidth: true },
          { cursor: 'pointer', textWrap: 'nowrap' },
        ),
      }}
    />
  );
};
