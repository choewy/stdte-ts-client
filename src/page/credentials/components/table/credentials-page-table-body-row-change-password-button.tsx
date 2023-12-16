import { FunctionComponent } from 'react';

import { dialogHook } from '@hook';
import { TableCellButton } from '@component';

export const CredentialsPageTableBodyRowChangePasswordButton: FunctionComponent<{
  id: number;
}> = ({ id }) => {
  const onClick = dialogHook.useCredentialsPageUpdatePasswordDialogCallback(id, true);

  return <TableCellButton text="비밀번호변경" onClick={onClick} />;
};
