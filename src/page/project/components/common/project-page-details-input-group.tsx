import { FunctionComponent } from 'react';
import { SetterOrUpdater } from 'recoil';

import { TextField, Typography } from '@mui/material';

import { DateInput } from '@component';
import { ProjectCreateBody, ProjectUpdateBody } from '@service';
import { textFieldHook } from '@hook';

export const ProjectPageDetailsInputGroup: FunctionComponent<{
  body: ProjectCreateBody | ProjectUpdateBody;
  setBody: SetterOrUpdater<ProjectCreateBody> | SetterOrUpdater<ProjectUpdateBody>;
}> = ({ body, setBody }) => {
  const onChangeStartDate = textFieldHook.useOnChangeObjectStrProperty('startDate', setBody);
  const onChangeEndDate = textFieldHook.useOnChangeObjectStrProperty('endDate', setBody);
  const onChangeKeepDate = textFieldHook.useOnChangeObjectStrProperty('keepDate', setBody);
  const onChangeOrderRecordDate = textFieldHook.useOnChangeObjectStrProperty('orderRecordDate', setBody);
  const onChangeOrderRecordAmount = textFieldHook.useOnChangeObjectKRWProperty(setBody, 'orderRecordAmount');
  const onChangeSaleRecordDate = textFieldHook.useOnChangeObjectStrProperty('saleRecordDate', setBody);
  const onChangeSaleRecordAmount = textFieldHook.useOnChangeObjectKRWProperty(setBody, 'saleRecordAmount');

  return (
    <>
      <>
        <Typography textAlign="center" variant="h6" sx={{ mt: 1, fontSize: 16 }}>
          기간
        </Typography>
        <DateInput {...{ label: '시작일자', value: body.startDate, onChange: onChangeStartDate }} />
        <DateInput {...{ label: '종료일자', value: body.endDate, onChange: onChangeEndDate }} />
        <DateInput {...{ label: '보존기한', value: body.keepDate, onChange: onChangeKeepDate }} />
      </>
      <>
        <Typography textAlign="center" variant="h6" sx={{ mt: 1, fontSize: 16 }}>
          수주
        </Typography>
        <DateInput {...{ label: '수주일자', value: body.orderRecordDate, onChange: onChangeOrderRecordDate }} />
        <TextField {...{ label: '수주금액', value: body.orderRecordAmount, onChange: onChangeOrderRecordAmount }} />
      </>
      <>
        <Typography textAlign="center" variant="h6" sx={{ mt: 1, fontSize: 16 }}>
          매출
        </Typography>
        <DateInput {...{ label: '매출발생일자', value: body.saleRecordDate, onChange: onChangeSaleRecordDate }} />
        <TextField {...{ label: '매출발생금액', value: body.saleRecordAmount, onChange: onChangeSaleRecordAmount }} />
      </>
    </>
  );
};
