import { FunctionComponent } from 'react';

import { GridTable, GridTableContainer, PageContainer } from '@component';
import { httpRequestLogHook } from '@hook';

const HttpRequestLogPage: FunctionComponent = () => {
  const props = httpRequestLogHook.useGetHttpRequestLogGridTableProps();

  return (
    <PageContainer>
      <GridTableContainer>
        <GridTable {...props} />
      </GridTableContainer>
    </PageContainer>
  );
};

export default HttpRequestLogPage;
