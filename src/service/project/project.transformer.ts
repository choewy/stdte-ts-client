import { ProjectCreateBody, ProjectUpdateBody } from './types';

export class ProjectTransformer {
  createRow(body: ProjectCreateBody): ProjectCreateBody {
    return {
      ...body,
      amount: body.amount.replaceAll(',', ''),
      customer: body.customer === 0 ? null : body.customer,
      businessCategory: body.businessCategory === 0 ? null : body.businessCategory,
      industryCategory: body.industryCategory === 0 ? null : body.industryCategory,
      taskCategory: body.taskCategory === 0 ? null : body.taskCategory,
    };
  }

  updateRow(body: ProjectUpdateBody) {
    return {
      ...body,
      amount: body.amount.replaceAll(',', ''),
      customer: body.customer === 0 ? null : body.customer,
      businessCategory: body.businessCategory === 0 ? null : body.businessCategory,
      industryCategory: body.industryCategory === 0 ? null : body.industryCategory,
      taskCategory: body.taskCategory === 0 ? null : body.taskCategory,
    };
  }
}

export const projectTransformer = new ProjectTransformer();
