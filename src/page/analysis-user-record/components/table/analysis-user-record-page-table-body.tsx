import { FunctionComponent } from 'react';

import { TableBody } from '@mui/material';

import { analysisUserRecordStore } from '@store';
import { AnalysisUserRecordPageTableBodyRow } from './analysis-user-record-page-table-body-row';
import { AnalysisUserRecordPageTableSxMap } from './analysis-user-record-page-table-sx-map';

export const AnalysisUserRecordPageTableBody: FunctionComponent<{
  sxMap: AnalysisUserRecordPageTableSxMap;
}> = ({ sxMap }) => {
  const { list } = analysisUserRecordStore.useValue();

  return (
    <TableBody>
      {list.users.map((user, i) => (
        <AnalysisUserRecordPageTableBodyRow
          key={['analysis-user-record-page-table-row', user.id, i].join('-')}
          sxMap={sxMap}
          years={list.years}
          user={user}
        />
      ))}
    </TableBody>
  );
};
