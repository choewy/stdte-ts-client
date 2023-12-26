import { isEmpty, isNumberString } from 'class-validator';

import { ProjectErrorMessage } from './enums';
import { ProjectCreateBody, ProjectUpdateBody } from './types';

export class ProjectValidator {
  createRow(body: ProjectCreateBody) {
    if (isEmpty(body.name)) {
      return ProjectErrorMessage.EmptyName;
    }

    if (isEmpty(body.difficulty)) {
      return ProjectErrorMessage.EmptyDifficulty;
    }

    if (isNumberString(body.difficulty) === false) {
      return ProjectErrorMessage.InvalidDifficulty;
    }

    if (body.industryCategory === 0) {
      return ProjectErrorMessage.EmptyIndustryCategory;
    }

    if (body.businessCategory === 0) {
      return ProjectErrorMessage.EmptyBusinessCategory;
    }

    if (body.taskCategory === 0) {
      return ProjectErrorMessage.EmptyTaskCategory;
    }
  }

  updateRow(body: ProjectUpdateBody) {
    if (isEmpty(body.name)) {
      return ProjectErrorMessage.EmptyName;
    }

    if (isEmpty(body.difficulty)) {
      return ProjectErrorMessage.EmptyDifficulty;
    }

    if (isNumberString(body.difficulty) === false) {
      return ProjectErrorMessage.InvalidDifficulty;
    }

    if (body.industryCategory === 0) {
      return ProjectErrorMessage.EmptyIndustryCategory;
    }

    if (body.businessCategory === 0) {
      return ProjectErrorMessage.EmptyBusinessCategory;
    }

    if (body.taskCategory === 0) {
      return ProjectErrorMessage.EmptyTaskCategory;
    }
  }
}

export const projectValidator = new ProjectValidator();
