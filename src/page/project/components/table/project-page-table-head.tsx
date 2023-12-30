import { FunctionComponent } from 'react';

import { TableHead, TableRow } from '@mui/material';

import { TableValueCell } from '@component';

export const ProjectPageTableHead: FunctionComponent<{
  canUpdate: boolean;
  canDelete: boolean;
}> = ({ canUpdate, canDelete }) => {
  return (
    <TableHead>
      <TableRow>
        <TableValueCell value="ID" rowSpan={2} stickyRow={0} />
        <TableValueCell value="사업정보" colSpan={9} stickyRow={0} />
        <TableValueCell value="담당자(대외)" colSpan={3} stickyRow={0} />
        <TableValueCell value="담당자(대내)" colSpan={3} stickyRow={0} />
        <TableValueCell value="기간" colSpan={3} stickyRow={0} />
        <TableValueCell value="시간관리" colSpan={2} stickyRow={0} />
        <TableValueCell value="수주/매출" rowSpan={2} stickyRow={0} />
        {(canUpdate || canDelete) && (
          <TableValueCell
            value={[canUpdate && '수정', canDelete && '삭제'].filter((v) => typeof v === 'string').join('/')}
            rowSpan={2}
            stickyRow={0}
          />
        )}
      </TableRow>
      <TableRow>
        <>
          <TableValueCell value="약어" stickyRow={1} />
          <TableValueCell value="사업명" stickyRow={1} />
          <TableValueCell value="난이도" stickyRow={1} />
          <TableValueCell value="산업분야" stickyRow={1} />
          <TableValueCell value="사업구분" stickyRow={1} />
          <TableValueCell value="고객사" stickyRow={1} />
          <TableValueCell value="규모(단위:원)" stickyRow={1} />
          <TableValueCell value="상태" stickyRow={1} />
          <TableValueCell value="비고" stickyRow={1} />
        </>
        <>
          <TableValueCell value="PO" stickyRow={1} />
          <TableValueCell value="PM" stickyRow={1} />
          <TableValueCell value="PL" stickyRow={1} />
          <TableValueCell value="PO" stickyRow={1} />
          <TableValueCell value="PM" stickyRow={1} />
          <TableValueCell value="PL" stickyRow={1} />
        </>
        <>
          <TableValueCell value="착수" stickyRow={1} />
          <TableValueCell value="준공" stickyRow={1} />
          <TableValueCell value="개월수" stickyRow={1} />
        </>
        <>
          <TableValueCell value="수행업무구분" stickyRow={1} />
          <TableValueCell value="노출여부" stickyRow={1} />
        </>
      </TableRow>
    </TableHead>
  );
};
