import { FunctionComponent } from 'react';

import { TableCellButton } from '@component';
import { ProjectRecordRow, ProjectRecordType } from '@service';
import { dialogHook } from '@hook';

export const ProjectPageOrderRecordTableBodyRowUpdateButton: FunctionComponent<{
  row: ProjectRecordRow;
}> = ({ row }) => {
  const onClick = dialogHook.useProjectRecordDialogCallback(ProjectRecordType.Order, 'update', true, row);

  return <TableCellButton text="수정" onClick={onClick} />;
};
