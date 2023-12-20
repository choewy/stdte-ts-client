import { FunctionComponent } from 'react';

import { TableCellEditButton } from '@component';
import { ProjectRecordRow, ProjectRecordType } from '@service';
import { dialogHook } from '@hook';

export const ProjectPageSaleRecordTableBodyRowUpdateButton: FunctionComponent<{
  row: ProjectRecordRow;
}> = ({ row }) => {
  const onClick = dialogHook.useProjectRecordDialogCallback(ProjectRecordType.Sale, 'update', true, row);

  return <TableCellEditButton onClick={onClick} />;
};
