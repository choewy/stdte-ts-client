import { FunctionComponent } from 'react';

import { TableCellButton } from '@component';
import { ProjectRow } from '@service';
import { dialogHook } from '@hook';

export const ProjectPageTableBodyRowUpdateButton: FunctionComponent<{ row: ProjectRow }> = ({ row }) => {
  const onClick = dialogHook.useProjectDialogCallback('update', true, row);

  return <TableCellButton text="수정" onClick={onClick} />;
};
