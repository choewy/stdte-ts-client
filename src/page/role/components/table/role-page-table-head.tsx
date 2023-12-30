import { FunctionComponent } from 'react';

import { TableHead, TableRow } from '@mui/material';

import { TableValueCell } from '@component';

export const RolePageTableHead: FunctionComponent = () => {
  return (
    <TableHead>
      <TableRow>
        <TableValueCell value="ID" />
        <TableValueCell value="이름" />
        <TableValueCell value="인원" />
        <TableValueCell value="수정/삭제" />
      </TableRow>
    </TableHead>
  );
};
