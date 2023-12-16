import { FunctionComponent } from 'react';

import { TableHead, TableRow } from '@mui/material';

import { TableValueCell } from '@component';

export const CredentialsPageTableHead: FunctionComponent = () => {
  return (
    <TableHead>
      <TableRow>
        <TableValueCell />
        <TableValueCell value="이메일" />
        <TableValueCell value="이름" />
        <TableValueCell value="가입일시" />
        <TableValueCell value="수정일시" />
        <TableValueCell />
      </TableRow>
    </TableHead>
  );
};
