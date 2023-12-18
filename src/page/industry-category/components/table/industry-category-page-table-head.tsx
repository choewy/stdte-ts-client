import { FunctionComponent } from 'react';

import { TableHead, TableRow } from '@mui/material';

import { TableValueCell } from '@component';

export const IndustryCategoryPageTableHead: FunctionComponent<{ canUpdate: boolean; canDelete: boolean }> = ({
  canUpdate,
  canDelete,
}) => {
  return (
    <TableHead>
      <TableRow>
        <TableValueCell value="행번호" />
        <TableValueCell value="산업분야명" />
        <TableValueCell value="비고" />
        <TableValueCell value="등록일시" />
        <TableValueCell value="수정일시" />
        {(canUpdate || canDelete) && <TableValueCell />}
      </TableRow>
    </TableHead>
  );
};
