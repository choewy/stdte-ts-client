import { FunctionComponent } from 'react';

import { TableCell, TableHead, TableRow } from '@mui/material';

export const CredentialsPageTableHead: FunctionComponent = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="center"></TableCell>
        <TableCell align="center">이메일</TableCell>
        <TableCell align="center">이름</TableCell>
        <TableCell align="center">가입일시</TableCell>
        <TableCell align="center">수정일시</TableCell>
        <TableCell align="center"></TableCell>
      </TableRow>
    </TableHead>
  );
};
