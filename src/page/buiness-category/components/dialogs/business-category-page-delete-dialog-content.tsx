import { FunctionComponent } from 'react';

import { DialogContentText } from '@mui/material';

export const BusinessCategoryPageDeleteDialogContent: FunctionComponent = () => {
  return (
    <DialogContentText>
      해당 사업구분이 연결된 사업의 사업구분을 재설정해야하며, 삭제된 데이터는 복구할 수 없습니다.
      <br />
      그래도 삭제하시겠습니까?
    </DialogContentText>
  );
};
