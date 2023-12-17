import { FunctionComponent } from 'react';

import { dialogHook } from '@hook';
import { UserRow } from '@service';
import { TableCellButton } from '@component';

export const UserPageTableBodyRowUpdateButton: FunctionComponent<{ row: UserRow }> = ({ row }) => {
  const onClick = dialogHook.useUserPageDialogCallback('update', row, true);

  return <TableCellButton text="수정" onClick={onClick} />;
};
