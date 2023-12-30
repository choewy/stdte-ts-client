import { FunctionComponent } from 'react';

import { TableHead, TableRow } from '@mui/material';

import { TableValueCell } from '@component';

export const CredentialsPageTableHead: FunctionComponent = () => {
  return (
    <TableHead>
      <TableRow>
        <TableValueCell value="ID" />
        <TableValueCell value="이름" />
        <TableValueCell value="이메일" />
        <TableValueCell value="상태변경/비밀번호변경" />
      </TableRow>
    </TableHead>
  );
};
