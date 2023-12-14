import { FunctionComponent } from 'react';

import { TableCell, TableHead, TableRow } from '@mui/material';

export const RolePageTableHead: FunctionComponent = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="center">ID</TableCell>
        <TableCell align="center">이름</TableCell>
        <TableCell align="center">생성일시</TableCell>
        <TableCell align="center">수정일시</TableCell>
      </TableRow>
    </TableHead>
  );
};
