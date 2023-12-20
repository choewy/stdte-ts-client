import { FunctionComponent } from 'react';

import { TableCellButton } from '@component';
import { ProjectRow } from '@service';
import { dialogHook } from '@hook';

export const ProjectPageTableBodyRowDeleteButton: FunctionComponent<{ row: ProjectRow }> = ({ row }) => {
  const onClick = dialogHook.useProjectDialogCallback('delete', true, row);

  return <TableCellButton text="삭제" onClick={onClick} />;
};
