import { FunctionComponent } from 'react';

import { Box } from '@mui/material';

import {
  ProjectPageOrderRecordTableToolbar,
  ProjectPageOrderRecordTable,
  ProjectPageSaleRecordTableToolbar,
  ProjectPageSaleRecordTable,
} from '../common';

export const ProjectPageRecordDialogContent: FunctionComponent = () => {
  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      <Box sx={{ flex: 1 }}>
        <ProjectPageOrderRecordTableToolbar />
        <ProjectPageOrderRecordTable {...{ canUpdate: true, canDelete: true }} />
      </Box>
      <Box sx={{ flex: 1 }}>
        <ProjectPageSaleRecordTableToolbar />
        <ProjectPageSaleRecordTable {...{ canUpdate: true, canDelete: true }} />
      </Box>
    </Box>
  );
};
