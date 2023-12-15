import { FunctionComponent } from 'react';

import { TableCell, TableHead, TableRow } from '@mui/material';
import { tableService } from '@service';

export const RolePageTableHead: FunctionComponent = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="center"></TableCell>
        <TableCell align="center" sx={tableService.getWidthByTextLength('이름', { minWidth: true })}>
          이름
        </TableCell>
        <TableCell align="center" sx={tableService.getWidthByTextLength('인원', { minWidth: true })}>
          인원
        </TableCell>
        <TableCell align="center" sx={tableService.getWidthByTextLength('생성일시', { minWidth: true })}>
          생성일시
        </TableCell>
        <TableCell align="center" sx={tableService.getWidthByTextLength('수정일시', { minWidth: true })}>
          수정일시
        </TableCell>
        <TableCell align="center"></TableCell>
      </TableRow>
    </TableHead>
  );
};
