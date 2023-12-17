import { FunctionComponent } from 'react';

import { dialogHook } from '@hook';
import { RoleRow } from '@service';
import { TableCellButton } from '@component';

export const RolePageTableBodyRowDeleteButton: FunctionComponent<{ row: RoleRow }> = ({ row }) => {
  const onClick = dialogHook.useRolePageDialogsCallback('delete', row, true);

  return <TableCellButton text="삭제" onClick={onClick} />;
};
