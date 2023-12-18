import { FunctionComponent } from 'react';

import { TableCellButton } from '@component';
import { ProjectRow } from '@service';
import { dialogHook } from '@hook';

export const ProjectPageTableBodyRowSaleRecordButton: FunctionComponent<{ row: ProjectRow }> = ({ row }) => {
  const onClick = dialogHook.useProjectPageDialogCallback('saleRecord', row, true);

  return <TableCellButton text="자세히" onClick={onClick} />;
};
