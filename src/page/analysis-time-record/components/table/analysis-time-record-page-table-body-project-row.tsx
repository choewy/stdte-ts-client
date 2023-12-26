import { FunctionComponent, useCallback } from 'react';

import { IconButton, TableCell, TableRow } from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

import { TableValueCell } from '@component';
import { AnalysisTimeRecordProjectRow, AnalysisTimeRecordYearRow } from '@service';
import { SetterOrUpdater } from 'recoil';
import { AnalysisTimeRecordPageTableSxMap } from './analysis-time-record-page-table-sx-map';

export const AnalysisTimeRecordPageTableBodyProjectRow: FunctionComponent<{
  sxMap: AnalysisTimeRecordPageTableSxMap;
  open: boolean;
  setOpen: SetterOrUpdater<boolean>;
  row: AnalysisTimeRecordProjectRow;
  years: AnalysisTimeRecordYearRow[];
}> = ({ sxMap, open, setOpen, row, years }) => {
  const onClick = useCallback(() => setOpen((prev) => !prev), [setOpen]);

  return (
    <TableRow hover>
      <TableCell style={{ width: '20px' }} component="th" sx={sxMap.projectNameBodyCellSx()}>
        <IconButton size="small" onClick={onClick} sx={{ marginRight: 3 }}>
          {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        </IconButton>
        {row.name}
      </TableCell>
      {years.map((year, i) => (
        <TableValueCell
          key={['analysis-time-record-page-table-body-row-year', row.id, year.year, i].join('-')}
          component="th"
          align="right"
          value={row.cols.find((col) => col.year === year.year)?.time ?? '0.00'}
        />
      ))}
      <TableValueCell
        component="th"
        align="right"
        value={row.cols
          .reduce<number>((t, v) => {
            t += Number(v.time);
            return t;
          }, 0)
          .toFixed(2)}
      />
    </TableRow>
  );
};
