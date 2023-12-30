import { FunctionComponent } from 'react';

import { TableHead, TableRow } from '@mui/material';

import { TableValueCell } from '@component';

export const UserPageTableHead: FunctionComponent<{ canUpdate: boolean }> = ({ canUpdate }) => {
  return (
    <TableHead>
      <TableRow>
        <TableValueCell value="행번호" rowSpan={2} stickyRow={0} />
        <TableValueCell value="인적사항" colSpan={4} stickyRow={0} />
        <TableValueCell value="계정정보" colSpan={5} stickyRow={0} />
        <TableValueCell value="학력사항" colSpan={3} stickyRow={0} />
        <TableValueCell value="차량정보" colSpan={2} stickyRow={0} />
        {canUpdate && (
          <TableValueCell
            value={[canUpdate && '수정'].filter((v) => typeof v === 'string').join('/')}
            rowSpan={2}
            stickyRow={0}
          />
        )}
      </TableRow>
      <TableRow>
        <>
          <TableValueCell value="이름" stickyRow={1} />
          <TableValueCell value="생년월일" stickyRow={1} />
          <TableValueCell value="연락처" stickyRow={1} />
          <TableValueCell value="과학기술인등록번호" stickyRow={1} />
        </>
        <>
          <TableValueCell value="이메일" stickyRow={1} />
          <TableValueCell value="역할" stickyRow={1} />
          <TableValueCell value="재직상태" stickyRow={1} />
          <TableValueCell value="입사일자" stickyRow={1} />
          <TableValueCell value="퇴사일자" stickyRow={1} />
        </>
        <>
          <TableValueCell value="최종학력" stickyRow={1} />
          <TableValueCell value="출신학교" stickyRow={1} />
          <TableValueCell value="전공학과" stickyRow={1} />
        </>
        <>
          <TableValueCell value="차종" stickyRow={1} />
          <TableValueCell value="차량번호" stickyRow={1} />
        </>
      </TableRow>
    </TableHead>
  );
};
