import { FunctionComponent } from 'react';
import { SetterOrUpdater } from 'recoil';

import { ProjectUpdateBody } from '@service';

import { ProjectPageDialogContentSection } from '../common';

export const ProjectPageUpdateDialogContent: FunctionComponent<{
  body: ProjectUpdateBody;
  setBody: SetterOrUpdater<ProjectUpdateBody>;
}> = ({ body, setBody }) => {
  return <ProjectPageDialogContentSection {...{ body, setBody }} />;
};
