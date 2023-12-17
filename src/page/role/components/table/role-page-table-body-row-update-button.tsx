import { FunctionComponent } from 'react';

import { dialogHook } from '@hook';
import { RoleRow } from '@service';
import { TableCellButton } from '@component';

export const RolePageTableBodyRowUpdateButton: FunctionComponent<{ row: RoleRow }> = ({ row }) => {
  const onClick = dialogHook.useRolePageDialogsCallback('update', row, true);

  return <TableCellButton text="수정" onClick={onClick} />;
};
