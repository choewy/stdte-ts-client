import { FunctionComponent } from 'react';
import { SetterOrUpdater } from 'recoil';

import { Box, InputAdornment, TextField } from '@mui/material';
import { Info } from '@mui/icons-material';

import { MultilineTooltip, SectionColumn, SectionContainer } from '@component';
import { ProjectCreateBody, ProjectUpdateBody } from '@service';
import { settingStore } from '@store';
import { textFieldHook } from '@hook';

import { ProjectPageStatusSelect } from './project-page-status-select';
import { ProjectPageBusinessCategorySelect } from './project-page-business-category-select';
import { ProjectPageIndustryCategorySelect } from './project-page-industry-category-select';
import { ProjectPageCustomerSelect } from './project-page-customer-select';
import { ProjectPageDetailsInputGroup } from './project-page-details-input-group';
import { ProjectPageUserSelectGroup } from './project-page-user-select-group';
import { ProjectPageCanExposeSelect } from './project-page-can-expose-select';
import { ProjectPageTaskCategorySelect } from './project-page-task-category-select';

export const ProjectPageDialogContentSection: FunctionComponent<{
  body: ProjectCreateBody | ProjectUpdateBody;
  setBody: SetterOrUpdater<ProjectCreateBody> | SetterOrUpdater<ProjectUpdateBody>;
  isCreateMode?: boolean;
}> = ({ body, setBody, isCreateMode }) => {
  const setting = settingStore.useValue();

  const onChangeCode = textFieldHook.useOnChangeObjectStrProperty(setBody, 'code');
  const onChangeDifficulty = textFieldHook.useOnChangeObjectDecimalProperty(setBody, 'difficulty');
  const onChangeName = textFieldHook.useOnChangeObjectStrProperty(setBody, 'name');
  const onChangeAmount = textFieldHook.useOnChangeObjectKRWProperty(setBody, 'amount');
  const onChangeDescription = textFieldHook.useOnChangeObjectStrProperty(setBody, 'description');

  return (
    <SectionContainer>
      <SectionColumn title="사업정보">
        <Box sx={{ display: 'flex', gap: 1 }}>
          <TextField {...{ label: '약어', value: body.code, onChange: onChangeCode }} />
          <TextField
            {...{
              label: '난이도',
              value: body.difficulty,
              onChange: onChangeDifficulty,
              InputProps: {
                endAdornment: (
                  <InputAdornment position="end">
                    <MultilineTooltip title={setting.row.difficultyTooltip}>
                      <Info sx={{ fontSize: 16 }} />
                    </MultilineTooltip>
                  </InputAdornment>
                ),
              },
            }}
          />
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
        <ProjectPageUserSelectGroup {...{ body, setBody }} />
      </SectionColumn>
      <SectionColumn>
        <ProjectPageDetailsInputGroup {...{ body, setBody }} />
      </SectionColumn>
      <SectionColumn title="시간관리">
        <ProjectPageTaskCategorySelect {...{ body, setBody, isCreateMode }} />
        <ProjectPageCanExposeSelect {...{ body, setBody }} />
      </SectionColumn>
    </SectionContainer>
  );
};
