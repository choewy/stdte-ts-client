import { FunctionComponent } from 'react';

import { TableCellIconButton } from '@component';
import { ProjectRow } from '@service';
import { dialogHook } from '@hook';
import { Receipt } from '@mui/icons-material';

export const ProjectPageTableBodyRowRecordButton: FunctionComponent<{ row: ProjectRow }> = ({ row }) => {
  const onClick = dialogHook.useProjectDialogCallback('record', true, row);

  return <TableCellIconButton Icon={Receipt} onClick={onClick} />;
};
