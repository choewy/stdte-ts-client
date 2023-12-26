import { Fragment, FunctionComponent, useState } from 'react';

import { AnalysisTimeRecordProjectRow, AnalysisTimeRecordUserRow, AnalysisTimeRecordYearRow } from '@service';

import { AnalysisTimeRecordPageTableBodyProjectRow } from './analysis-time-record-page-table-body-project-row';
import { AnalysisTimeRecordPageTableBodyUserRows } from './analysis-time-record-page-table-body-user-rows';
import { AnalysisTimeRecordPageTableSxMap } from './analysis-time-record-page-table-sx-map';

export const AnalysisTimeRecordPageTableBodyRow: FunctionComponent<{
  sxMap: AnalysisTimeRecordPageTableSxMap;
  row: AnalysisTimeRecordProjectRow;
  years: AnalysisTimeRecordYearRow[];
  users: AnalysisTimeRecordUserRow[];
}> = ({ sxMap, row, years, users }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Fragment>
      <AnalysisTimeRecordPageTableBodyProjectRow sxMap={sxMap} open={open} setOpen={setOpen} row={row} years={years} />
      <AnalysisTimeRecordPageTableBodyUserRows sxMap={sxMap} open={open} row={row} years={years} users={users} />
    </Fragment>
  );
};
