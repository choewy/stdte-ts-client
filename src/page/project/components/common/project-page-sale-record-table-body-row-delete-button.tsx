import { FunctionComponent } from 'react';

import { TableCellButton } from '@component';
import { ProjectRecordRow, ProjectRecordType } from '@service';
import { dialogHook } from '@hook';

export const ProjectPageSaleRecordTableBodyRowDeleteButton: FunctionComponent<{
  row: ProjectRecordRow;
}> = ({ row }) => {
  const onClick = dialogHook.useProjectRecordDialogCallback(ProjectRecordType.Sale, 'delete', true, row);

  return <TableCellButton text="삭제" onClick={onClick} />;
};
