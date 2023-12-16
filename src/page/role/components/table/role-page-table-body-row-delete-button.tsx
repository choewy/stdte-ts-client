import { FunctionComponent } from 'react';

import { Link } from '@mui/material';

import { dialogHook } from '@hook';
import { RoleAdminRowResponse, sizeService } from '@service';

export const RolePageTableBodyRowDeleteButton: FunctionComponent<{ row: RoleAdminRowResponse }> = ({ row }) => {
  const text = '삭제';

  const onClick = dialogHook.useRolePageDialogsCallback('delete', row, true);

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
