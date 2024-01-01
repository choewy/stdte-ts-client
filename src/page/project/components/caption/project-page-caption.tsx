import { FunctionComponent } from 'react';

import { Box } from '@mui/material';

import { projectStore } from '@store';

export const ProjectPageCaption: FunctionComponent = () => {
  const { amounts } = projectStore.useValue().list;

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 40,
        mt: '5px',
        fontSize: '12px',
      }}
    >
      합계 : {Number(amounts).toLocaleString()}원
    </Box>
  );
};
