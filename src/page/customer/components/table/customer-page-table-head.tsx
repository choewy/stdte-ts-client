import { FunctionComponent } from 'react';

import { TableHead, TableRow } from '@mui/material';

import { TableValueCell } from '@component';

export const CustomerPageTableHead: FunctionComponent<{
  canUpdate: boolean;
  canDelete: boolean;
}> = ({ canUpdate, canDelete }) => {
  return (
    <TableHead>
      <TableRow>
        <TableValueCell value="ID" />
        <TableValueCell value="별칭" />
        <TableValueCell value="국문" />
        <TableValueCell value="영문" />
        <TableValueCell value="비고" />
        {(canUpdate || canDelete) && (
          <TableValueCell
            value={[canUpdate && '수정', canDelete && '삭제'].filter((v) => typeof v === 'string').join('/')}
          />
        )}
      </TableRow>
    </TableHead>
  );
};
