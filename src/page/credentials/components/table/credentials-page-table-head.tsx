import { FunctionComponent } from 'react';

import { TableCell, TableHead, TableRow } from '@mui/material';
import { sizeService } from '@service';

export const CredentialsPageTableHead: FunctionComponent = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="center"></TableCell>
        <TableCell align="center" sx={sizeService.getWidthByTextLength('이메일', { minWidth: true })}>
          이메일
        </TableCell>
        <TableCell align="center" sx={sizeService.getWidthByTextLength('이름', { minWidth: true })}>
          이름
        </TableCell>
        <TableCell align="center" sx={sizeService.getWidthByTextLength('가입일시', { minWidth: true })}>
          가입일시
        </TableCell>
        <TableCell align="center" sx={sizeService.getWidthByTextLength('수정일시', { minWidth: true })}>
          수정일시
        </TableCell>
        <TableCell align="center"></TableCell>
      </TableRow>
    </TableHead>
  );
};
