import { FunctionComponent } from 'react';

import { Link } from '@mui/material';

import { CredentialsChangeStatusComponentProperty, sizeService } from '@service';
import { credentialsHook } from '@hook';

export const CredentialsPageTableBodyRowChangeStatusButton: FunctionComponent<{
  id: number;
  property: CredentialsChangeStatusComponentProperty;
}> = ({ id, property }) => {
  const text = property.label;

  const onClick = credentialsHook.useUpdateCredentialsStatusByAdminCallback(id, property);

  return (
    <Link
      {...{
        children: text,
        onClick,
        sx: sizeService.getWidthByTextLength(
          text,
          { width: true, minWidth: true },
          { cursor: 'pointer', textWrap: 'nowrap' },
        ),
      }}
    />
  );
};
