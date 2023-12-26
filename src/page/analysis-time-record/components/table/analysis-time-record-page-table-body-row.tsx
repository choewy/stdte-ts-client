import { Fragment, FunctionComponent, useState } from 'react';

import { AnalysisTimeRecordProjectRow, AnalysisTimeRecordUserRow, AnalysisTimeRecordYearRow } from '@service';

import { AnalysisTimeRecordPageTableBodyProjectRow } from './analysis-time-record-page-table-body-project-row';
import { AnalysisTimeRecordPageTableBodyUserRows } from './analysis-time-record-page-table-body-user-rows';

export const AnalysisTimeRecordPageTableBodyRow: FunctionComponent<{
  row: AnalysisTimeRecordProjectRow;
  years: AnalysisTimeRecordYearRow[];
  users: AnalysisTimeRecordUserRow[];
}> = ({ row, years, users }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Fragment>
      <AnalysisTimeRecordPageTableBodyProjectRow open={open} setOpen={setOpen} row={row} years={years} />
      <AnalysisTimeRecordPageTableBodyUserRows open={open} row={row} years={years} users={users} />
    </Fragment>
  );
};
