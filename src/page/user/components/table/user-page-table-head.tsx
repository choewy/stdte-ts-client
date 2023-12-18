import { FunctionComponent } from 'react';

import { TableHead, TableRow } from '@mui/material';

import { TableValueCell } from '@component';

export const UserPageTableHead: FunctionComponent<{ canUpdate: boolean }> = ({ canUpdate }) => {
  return (
    <TableHead>
      <TableRow>
        <TableValueCell value="행번호" />
        <TableValueCell value="이름" />
        <TableValueCell value="이메일" />
        <TableValueCell value="재직상태" />
        <TableValueCell value="역할" />
        <TableValueCell value="입사일자" />
        <TableValueCell value="퇴사일자" />
        <TableValueCell value="생년월일" />
        <TableValueCell value="연락처" />
        <TableValueCell value="과학기술인등록번호" />
        <TableValueCell value="최종학력" />
        <TableValueCell value="출신학교" />
        <TableValueCell value="전공학과" />
        <TableValueCell value="차종" />
        <TableValueCell value="차량번호" />
        <TableValueCell value="가입일시" />
        <TableValueCell value="수정일시" />
        {canUpdate && <TableValueCell />}
      </TableRow>
    </TableHead>
  );
};
