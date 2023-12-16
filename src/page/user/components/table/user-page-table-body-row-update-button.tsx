import { FunctionComponent } from 'react';

import { dialogHook } from '@hook';
import { UserRowResponse } from '@service';
import { TableCellButton } from '@component';

export const UserPageTableBodyRowUpdateButton: FunctionComponent<{ row: UserRowResponse }> = ({ row }) => {
  const onClick = dialogHook.useUserPageDialogCallback('update', row, true);

  return <TableCellButton text="수정" onClick={onClick} />;
};
