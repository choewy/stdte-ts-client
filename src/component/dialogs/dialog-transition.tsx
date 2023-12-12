import { forwardRef } from 'react';

import { TransitionProps } from '@mui/material/transitions';
import { Slide, SlideProps } from '@mui/material';

export const DialogTransition = forwardRef(
  (props: TransitionProps & Pick<SlideProps, 'children'>, ref: React.Ref<unknown>) => {
    return <Slide direction="up" ref={ref} {...props} timeout={150} />;
  },
);
