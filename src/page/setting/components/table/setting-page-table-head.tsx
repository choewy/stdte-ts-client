import { FunctionComponent } from 'react';

import { TableHead, TableRow } from '@mui/material';

import { TableValueCell } from '@component';

export const SettingPageTableHead: FunctionComponent = () => {
  return (
    <TableHead>
      <TableRow>
        <TableValueCell value="항목" />
        <TableValueCell value="보기" />
      </TableRow>
    </TableHead>
  );
};
