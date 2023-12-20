import { FunctionComponent } from 'react';

import { TableCellDeleteButton } from '@component';
import { ProjectRecordRow, ProjectRecordType } from '@service';
import { dialogHook } from '@hook';

export const ProjectPageOrderRecordTableBodyRowDeleteButton: FunctionComponent<{
  row: ProjectRecordRow;
}> = ({ row }) => {
  const onClick = dialogHook.useProjectRecordDialogCallback(ProjectRecordType.Order, 'delete', true, row);

  return <TableCellDeleteButton onClick={onClick} />;
};
