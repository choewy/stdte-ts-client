import { FunctionComponent } from 'react';

import { DialogContentText } from '@mui/material';

export const CustomerPageDeleteDialogContent: FunctionComponent = () => {
  return (
    <DialogContentText>
      해당 고객사 정보가 연결된 사업의 고객시 정보를 재설정해야하며, 삭제된 데이터는 복구할 수 없습니다.
      <br />
      그래도 삭제하시겠습니까?
    </DialogContentText>
  );
};
