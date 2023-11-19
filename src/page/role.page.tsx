import { FunctionComponent } from 'react';

import { GridTable, GridTableContainer, PageContainer } from '@component';
import { roleHook } from '@hook';

const RolePage: FunctionComponent = () => {
  const props = roleHook.useGetRoleGridTableProps();

  return (
    <PageContainer>
      <GridTableContainer>
        <GridTable {...props} />
      </GridTableContainer>
    </PageContainer>
  );
};

export default RolePage;
