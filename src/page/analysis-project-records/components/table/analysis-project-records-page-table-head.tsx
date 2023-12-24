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
            <TableValueCell value={row.year} />
            <TableValueCell value="%" />
          </Fragment>
        ))}
      </TableRow>
    </TableHead>
  );
};
