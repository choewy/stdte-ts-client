import { FunctionComponent } from 'react';

import { CredentialsChangeStatusComponentProperty } from '@service';
import { TableCellButton } from '@component';
import { credentialsHook } from '@hook';

export const CredentialsPageTableBodyRowChangeStatusButton: FunctionComponent<{
  id: number;
  property: CredentialsChangeStatusComponentProperty;
}> = ({ id, property }) => {
  const onClick = credentialsHook.useUpdateCredentialsStatusByAdminCallback(id, property);

  return <TableCellButton text={property.label} onClick={onClick} />;
};
