import { FunctionComponent } from 'react';

import { Button } from '@mui/material';

import { CredentialsChangeStatusComponentProperty } from '@service';
import { credentialsHook } from '@hook';

export const CredentialsPageTableBodyRowChangeStatusButton: FunctionComponent<{
  id: number;
  property: CredentialsChangeStatusComponentProperty;
}> = ({ id, property }) => {
  const onClick = credentialsHook.useUpdateCredentialsStatusByAdminCallback(id, property);

  return (
    <Button
      {...{
        children: property.label,
        fullWidth: false,
        size: 'small',
        variant: 'text',
        color: 'info',
        onClick,
      }}
    />
  );
};
