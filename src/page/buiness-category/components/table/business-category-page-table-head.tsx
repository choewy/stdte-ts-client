import { FunctionComponent } from 'react';

import { TableHead, TableRow } from '@mui/material';

import { TableValueCell } from '@component';

export const BusinessCategoryPageTableHead: FunctionComponent<{ canUpdate: boolean; canDelete: boolean }> = ({
  canUpdate,
  canDelete,
}) => {
  return (
    <TableHead>
      <TableRow>
        <TableValueCell value="ID" />
        <TableValueCell value="사업구분명" />
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
