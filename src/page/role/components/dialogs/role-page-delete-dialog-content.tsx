import { FunctionComponent } from 'react';

import { DialogContentText } from '@mui/material';

export const RolePageDeleteDialogContent: FunctionComponent = () => {
  return (
    <DialogContentText>
      해당 역할이 부여된 구성원의 역할을 재설정해야하며, 삭제된 데이터는 복구할 수 없습니다.
      <br />
      그래도 삭제하시겠습니까?
    </DialogContentText>
  );
};
