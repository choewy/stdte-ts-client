import { FunctionComponent } from 'react';

import { Link } from '@mui/material';

import { dialogHook } from '@hook';
import { UserRowResponse, sizeService } from '@service';

export const UserPageTableBodyRowUpdateButton: FunctionComponent<{ row: UserRowResponse }> = ({ row }) => {
  const text = '수정';

  const onClick = dialogHook.useUserPageDialogCallback('update', row, true);

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
