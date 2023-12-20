import { FunctionComponent } from 'react';

import { TableCellEditButton } from '@component';
import { ProjectRow } from '@service';
import { dialogHook } from '@hook';

export const ProjectPageTableBodyRowUpdateButton: FunctionComponent<{ row: ProjectRow }> = ({ row }) => {
  const onClick = dialogHook.useProjectDialogCallback('update', true, row);

  return <TableCellEditButton onClick={onClick} />;
};
