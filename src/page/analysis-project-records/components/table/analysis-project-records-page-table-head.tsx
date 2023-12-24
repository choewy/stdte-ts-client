import { Fragment, FunctionComponent } from 'react';

import { TableHead, TableRow } from '@mui/material';

import { TableValueCell } from '@component';
import { analysisProjectRecordStore } from '@store';

export const AnalysisProjectRecordPageTableHead: FunctionComponent = () => {
  const { tabIndex, head, list } = analysisProjectRecordStore.useValue();

  const years = list[tabIndex].years;

  return (
    <TableHead>
      <TableRow>
        <TableValueCell value={head} />
        {years.map((row, i) => (
          <Fragment key={['analysis-project-record-table-head-year', row.year, i].join('-')}>
            <TableValueCell value={row.year} stickyRow={0} />
            <TableValueCell value="%" width={60} stickyRow={0} />
          </Fragment>
        ))}
      </TableRow>
      <TableRow>
        <TableValueCell value="합계" />

        {years.map((row, i) => (
          <Fragment key={['analysis-project-record-table-head-total', row.year, i].join('-')}>
            <TableValueCell value={Number(row.amount ?? '0').toLocaleString('ko-KR')} align="right" stickyRow={1} />
            <TableValueCell value="100.0%" stickyRow={1} />
          </Fragment>
        ))}
      </TableRow>
    </TableHead>
  );
};
