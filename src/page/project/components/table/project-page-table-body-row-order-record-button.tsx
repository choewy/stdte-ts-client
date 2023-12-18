import { FunctionComponent } from 'react';

import { TableCellButton } from '@component';
import { ProjectRow } from '@service';
import { dialogHook } from '@hook';

export const ProjectPageTableBodyRowOrderRecordButton: FunctionComponent<{ row: ProjectRow }> = ({ row }) => {
  const onClick = dialogHook.useProjectPageDialogCallback('orderRecord', row, true);

  return <TableCellButton text="자세히" onClick={onClick} />;
};
