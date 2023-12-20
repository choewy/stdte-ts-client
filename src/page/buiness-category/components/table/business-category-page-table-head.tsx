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
        <TableValueCell value="행번호" />
        <TableValueCell value="사업구분명" />
        <TableValueCell value="비고" />
        <TableValueCell value="등록일시" />
        <TableValueCell value="수정일시" />
        {(canUpdate || canDelete) && (
          <TableValueCell
            value={[canUpdate && '수정', canDelete && '삭제'].filter((v) => typeof v === 'string').join('/')}
          />
        )}
      </TableRow>
    </TableHead>
  );
};
