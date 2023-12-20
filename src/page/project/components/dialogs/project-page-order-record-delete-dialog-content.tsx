import { FunctionComponent } from 'react';

import { DialogContentText } from '@mui/material';

export const ProjectPageOrderRecordDeleteDialogContent: FunctionComponent = () => {
  return (
    <DialogContentText>
      삭제된 데이터는 복구할 수 없습니다.
      <br />
      그래도 삭제하시겠습니까?
    </DialogContentText>
  );
};
