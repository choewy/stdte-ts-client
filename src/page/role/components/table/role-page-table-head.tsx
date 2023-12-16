import { FunctionComponent } from 'react';

import { TableHead, TableRow } from '@mui/material';

import { TableValueCell } from '@component';

export const RolePageTableHead: FunctionComponent = () => {
  return (
    <TableHead>
      <TableRow>
        <TableValueCell />
        <TableValueCell value="이름" />
        <TableValueCell value="인원" />
        <TableValueCell value="생성일시" />
        <TableValueCell value="수정일시" />
        <TableValueCell />
      </TableRow>
    </TableHead>
  );
};
