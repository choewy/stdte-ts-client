import { FunctionComponent } from 'react';
import { SetterOrUpdater } from 'recoil';

import { Box, TextField } from '@mui/material';

import { SectionColumn, SectionContainer } from '@component';
import { ProjectCreateBody, ProjectUpdateBody } from '@service';
import { textFieldHook } from '@hook';

import { ProjectPageStatusSelect } from './project-page-status-select';
import { ProjectPageBusinessCategorySelect } from './project-page-business-category-select';
import { ProjectPageIndustryCategorySelect } from './project-page-industry-category-select';
import { ProjectPageCustomerSelect } from './project-page-customer-select';
import { ProjectPageDetailsInputGroup } from './project-page-details-input-group';
import { ProjectPageUserSelectGroup } from './project-page-user-select-group';
import { ProjectPageTaskCategorySelect } from './project-page-task-category-select';
import { ProjectPageCanExposeSelect } from './project-page-can-expose-select';

export const ProjectPageDialogContentSection: FunctionComponent<{
  body: ProjectCreateBody | ProjectUpdateBody;
  setBody: SetterOrUpdater<ProjectCreateBody> | SetterOrUpdater<ProjectUpdateBody>;
}> = ({ body, setBody }) => {
  const onChangeCode = textFieldHook.useOnChangeObjectStrProperty('code', setBody);
  const onChangeDifficulty = textFieldHook.useOnChangeObjectDecimalProperty(setBody, 'difficulty');
  const onChangeName = textFieldHook.useOnChangeObjectStrProperty('name', setBody);
  const onChangeAmount = textFieldHook.useOnChangeObjectKRWProperty(setBody, 'amount');
  const onChangeDescription = textFieldHook.useOnChangeObjectStrProperty('description', setBody);

  return (
    <SectionContainer>
      <SectionColumn title="사업정보">
        <Box sx={{ display: 'flex', gap: 1 }}>
          <TextField {...{ label: '사업코드', value: body.code, onChange: onChangeCode }} />
          <TextField {...{ label: '난이도', value: body.difficulty, onChange: onChangeDifficulty }} />
        </Box>
        <TextField {...{ label: '사업명', value: body.name, onChange: onChangeName }} />
        <TextField {...{ label: '규모(단위 : 원)', value: body.amount, onChange: onChangeAmount }} />
        <ProjectPageIndustryCategorySelect body={body} setBody={setBody} />
        <ProjectPageBusinessCategorySelect body={body} setBody={setBody} />
        <ProjectPageCustomerSelect body={body} setBody={setBody} />
        <ProjectPageStatusSelect body={body} setBody={setBody} />
        <TextField {...{ label: '비고', value: body.description, onChange: onChangeDescription }} />
      </SectionColumn>
      <SectionColumn>
        <ProjectPageDetailsInputGroup {...{ body, setBody }} />
      </SectionColumn>
      <SectionColumn>
        <ProjectPageUserSelectGroup {...{ body, setBody }} />
      </SectionColumn>
      <SectionColumn title="시간관리">
        <ProjectPageTaskCategorySelect {...{ body, setBody }} />
        <ProjectPageCanExposeSelect {...{ body, setBody }} />
      </SectionColumn>
    </SectionContainer>
  );
};