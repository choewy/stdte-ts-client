import { FunctionComponent } from 'react';
import { SetterOrUpdater } from 'recoil';

import { Typography } from '@mui/material';

import { DateInput } from '@component';
import { ProjectCreateBody, ProjectUpdateBody } from '@service';
import { textFieldHook } from '@hook';

export const ProjectPageDetailsInputGroup: FunctionComponent<{
  body: ProjectCreateBody | ProjectUpdateBody;
  setBody: SetterOrUpdater<ProjectCreateBody> | SetterOrUpdater<ProjectUpdateBody>;
}> = ({ body, setBody }) => {
  const onChangeStartDate = textFieldHook.useOnChangeObjectStrProperty('startDate', setBody);
  const onChangeEndDate = textFieldHook.useOnChangeObjectStrProperty('endDate', setBody);

  return (
    <>
      <Typography textAlign="center" variant="h6" sx={{ mt: 1, fontSize: 16 }}>
        기간
      </Typography>
      <DateInput {...{ label: '착수일자', value: body.startDate, onChange: onChangeStartDate }} />
      <DateInput {...{ label: '준공일자', value: body.endDate, onChange: onChangeEndDate }} />
    </>
  );
};
