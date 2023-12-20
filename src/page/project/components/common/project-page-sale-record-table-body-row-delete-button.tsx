import { FunctionComponent } from 'react';

import { TableCellDeleteButton } from '@component';
import { ProjectRecordRow, ProjectRecordType } from '@service';
import { dialogHook } from '@hook';

export const ProjectPageSaleRecordTableBodyRowDeleteButton: FunctionComponent<{
  row: ProjectRecordRow;
}> = ({ row }) => {
  const onClick = dialogHook.useProjectRecordDialogCallback(ProjectRecordType.Sale, 'delete', true, row);

  return <TableCellDeleteButton onClick={onClick} />;
};
