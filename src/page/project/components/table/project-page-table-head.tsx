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
        <TableValueCell value="행번호" rowSpan={2} />
        <TableValueCell value="사업정보" colSpan={9} />
        <TableValueCell value="기간" colSpan={3} />
        <TableValueCell value="수주" colSpan={2} />
        <TableValueCell value="매출" colSpan={2} />
        <TableValueCell value="담당자(대외)" colSpan={3} />
        <TableValueCell value="담당자(대내)" colSpan={3} />
        <TableValueCell value="시간관리" colSpan={2} />
        <TableValueCell value="등록일시" rowSpan={2} />
        <TableValueCell value="수정일시" rowSpan={2} />
        {(canUpdate || canDelete) && <TableValueCell rowSpan={2} />}
      </TableRow>
      <TableRow>
        <>
          <TableValueCell value="사업코드" />
          <TableValueCell value="사업명" />
          <TableValueCell value="난이도" />
          <TableValueCell value="산업분야" />
          <TableValueCell value="사업구분" />
          <TableValueCell value="고객사" />
          <TableValueCell value="규모(단위:원)" />
          <TableValueCell value="상태" />
          <TableValueCell value="비고" />
        </>
        <>
          <TableValueCell value="시작일자" />
          <TableValueCell value="종료일자" />
          <TableValueCell value="보존기한" />
        </>
        <>
          <TableValueCell value="수주일자" />
          <TableValueCell value="수주금액" />
        </>
        <>
          <TableValueCell value="매출발생일자" />
          <TableValueCell value="매출발생금액" />
        </>
        <>
          <TableValueCell value="PO" />
          <TableValueCell value="PM" />
          <TableValueCell value="PL" />
          <TableValueCell value="PO" />
          <TableValueCell value="PM" />
          <TableValueCell value="PL" />
        </>
        <>
          <TableValueCell value="수행업무구분" />
          <TableValueCell value="노출여부" />
        </>
      </TableRow>
    </TableHead>
  );
};
