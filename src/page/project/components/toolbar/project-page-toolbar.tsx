import { FunctionComponent } from 'react';

import { Box } from '@mui/material';

import { ProjectPageToolbarFilter } from './project-page-toolbar-filter';
import { ProjectPageToolbarButtonGroup } from './project-page-toolbar-buttons';

export const ProjectPageToolbar: FunctionComponent<{
  canCreate: boolean;
}> = ({ canCreate }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        height: 45,
        mb: 1,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: 1, flex: 1 }}>
        <ProjectPageToolbarFilter />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', flex: 1 }}>
        <ProjectPageToolbarButtonGroup canCreate={canCreate} />
      </Box>
    </Box>
  );
};
