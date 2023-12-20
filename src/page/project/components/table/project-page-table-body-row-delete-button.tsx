import { FunctionComponent } from 'react';

import { TableCellDeleteButton } from '@component';
import { ProjectRow } from '@service';
import { dialogHook } from '@hook';

export const ProjectPageTableBodyRowDeleteButton: FunctionComponent<{ row: ProjectRow }> = ({ row }) => {
  const onClick = dialogHook.useProjectDialogCallback('delete', true, row);

  return <TableCellDeleteButton onClick={onClick} />;
};
