import { FunctionComponent } from 'react';

import { Box } from '@mui/material';

import { ProjectRow } from '@service';

import {
  ProjectPageOrderRecordTableToolbar,
  ProjectPageOrderRecordTable,
  ProjectPageSaleRecordTableToolbar,
  ProjectPageSaleRecordTable,
} from '../common';

export const ProjectPageRecordDialogContent: FunctionComponent<{ row: ProjectRow }> = ({ row }) => {
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1 }}>
      <Box sx={{ overflow: 'auto', padding: 1, boxSizing: 'border-box' }}>
        <ProjectPageOrderRecordTableToolbar {...{ row }} />
        <ProjectPageOrderRecordTable {...{ canUpdate: true, canDelete: true }} />
      </Box>
      <Box sx={{ overflow: 'auto', padding: 1, boxSizing: 'border-box' }}>
        <ProjectPageSaleRecordTableToolbar {...{ row }} />
        <ProjectPageSaleRecordTable {...{ canUpdate: true, canDelete: true }} />
      </Box>
    </Box>
  );
};
