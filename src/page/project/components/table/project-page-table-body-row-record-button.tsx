import { FunctionComponent } from 'react';

import { TableCellButton } from '@component';
import { ProjectRow } from '@service';
import { dialogHook } from '@hook';

export const ProjectPageTableBodyRowRecordButton: FunctionComponent<{ row: ProjectRow }> = ({ row }) => {
  const onClick = dialogHook.useProjectDialogCallback('record', true, row);

  return <TableCellButton text="수주/매출" onClick={onClick} />;
};
