import { FunctionComponent } from 'react';

import { TableBody, TableRow } from '@mui/material';
import { Description } from '@mui/icons-material';

import { TableCellIconButton, TableComponentCell, TableValueCell } from '@component';
import { settingHook } from '@hook';

export const SettingPageTableBody: FunctionComponent = () => {
  const onOpenDialog = settingHook.useDialogCallback(true);

  return (
    <TableBody>
      <TableRow>
        <TableValueCell value="사업 난이도 툴팁" />
        <TableComponentCell components={<TableCellIconButton Icon={Description} onClick={onOpenDialog} />} />
      </TableRow>
    </TableBody>
  );
};
