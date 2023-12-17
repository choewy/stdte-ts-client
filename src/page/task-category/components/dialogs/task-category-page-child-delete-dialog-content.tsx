import { FunctionComponent } from 'react';

import { DialogContentText } from '@mui/material';

export const TaskCategoryPageChildDeleteDialogContent: FunctionComponent = () => {
  return (
    <DialogContentText>
      해당 수행업무구분 소분류로 입력된 시간기록은 삭제될 수 있으며, 삭제된 데이터는 복구할 수 없습니다.
      <br />
      그래도 삭제하시겠습니까?
    </DialogContentText>
  );
};
