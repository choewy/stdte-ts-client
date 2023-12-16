import { FunctionComponent } from 'react';

import { dialogHook } from '@hook';
import { RoleAdminRowResponse } from '@service';
import { TableCellButton } from '@component';

export const RolePageTableBodyRowUpdateButton: FunctionComponent<{ row: RoleAdminRowResponse }> = ({ row }) => {
  const onClick = dialogHook.useRolePageDialogsCallback('update', row, true);

  return <TableCellButton text="수정" onClick={onClick} />;
};
