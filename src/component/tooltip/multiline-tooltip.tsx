import { Fragment, FunctionComponent } from 'react';

import { Tooltip, TooltipProps } from '@mui/material';

export const MultilineTooltip: FunctionComponent<Omit<TooltipProps, 'title'> & { title: string }> = ({
  title,
  ...props
}) => {
  return (
    <Tooltip
      {...props}
      title={
        <>
          {title.split('\n').map((text, i) => (
            <Fragment key={['multiline-tooltip-text'].join('-')}>
              {text}
              <br />
            </Fragment>
          ))}
        </>
      }
    />
  );
};
