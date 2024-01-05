import { FunctionComponent } from 'react';
import { SetterOrUpdater } from 'recoil';

import { ProjectCreateBody } from '@service';

import { ProjectPageDialogContentSection } from '../common';

export const ProjectPageCreateDialogContent: FunctionComponent<{
  body: ProjectCreateBody;
  setBody: SetterOrUpdater<ProjectCreateBody>;
}> = ({ body, setBody }) => {
  return <ProjectPageDialogContentSection {...{ body, setBody, isCreateMode: true }} />;
};
