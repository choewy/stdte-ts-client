import { FunctionComponent } from 'react';

import { TableHead, TableRow } from '@mui/material';

import { TableValueCell } from '@component';

export const TaskCategoryPageTableHead: FunctionComponent<{
  canUpdate: boolean;
  canDelete: boolean;
}> = ({ canUpdate, canDelete }) => {
  return (
    <TableHead>
      <TableRow>
        <TableValueCell />
        <TableValueCell value="대분류명" />
        <TableValueCell value="소분류" />
        <TableValueCell value="비고" />
        <TableValueCell value="등록일시" />
        <TableValueCell value="수정일시" />
        {(canUpdate || canDelete) && <TableValueCell />}
      </TableRow>
    </TableHead>
  );
};
