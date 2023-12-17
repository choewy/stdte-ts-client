import { FunctionComponent } from 'react';

import { DialogContentText } from '@mui/material';

export const TaskCategoryPageDeleteDialogContent: FunctionComponent = () => {
  return (
    <DialogContentText>
      해당 수행업무구분이 연결된 사업의 수행업무구분을 재설정해야하며, 해당 수행업무구분으로 입력된 시간기록은 삭제될 수
      있습니다. 삭제된 데이터는 복구할 수 없습니다.
      <br />
      그래도 삭제하시겠습니까?
    </DialogContentText>
  );
};
