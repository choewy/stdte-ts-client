import { DateTime } from 'luxon';
import { FunctionComponent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Tab } from '@mui/material';

import { PagePath } from '@common';
import { TimeRecordLogRow, sizeService } from '@service';

export const TimeRecordLayoutLogrTab: FunctionComponent<{
  row: TimeRecordLogRow;
}> = ({ row }) => {
  const datetime = DateTime.fromISO(row.updatedAt).toFormat('yyyy-MM-dd HH:mm:ss');

  const navigate = useNavigate();
  const onClick = useCallback(() => {
    navigate([PagePath.TimeRecord, row.id].join('/'));
  }, [row.id, navigate]);

  return (
    <Tab
      value={row.id}
      onClick={onClick}
      label={
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            gap: '10px',
          }}
        >
          <div style={{ width: sizeService.getWidthByTextLength(row.name), textAlign: 'left' }}>{row.name}</div>
          <div style={{ width: sizeService.getWidthByTextLength(datetime), textAlign: 'right' }}>{datetime}</div>
        </div>
      }
    />
  );
};
