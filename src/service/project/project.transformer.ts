import { ProjectCreateBody, ProjectUpdateBody } from './types';

export class ProjectTransformer {
  createRow(body: ProjectCreateBody): ProjectCreateBody {
    return {
      ...body,
      amount: body.amount.replaceAll(',', ''),
      customer: body.customer === 0 ? null : 0,
      businessCategory: body.businessCategory === 0 ? null : 0,
      industryCategory: body.industryCategory === 0 ? null : 0,
      taskCategory: body.taskCategory === 0 ? null : 0,
    };
  }

  updateRow(body: Partial<ProjectUpdateBody>) {
    return {
      ...body,
      amount: (body.amount ?? '').replaceAll(',', ''),
      customer: body.customer === 0 ? null : 0,
      businessCategory: body.businessCategory === 0 ? null : 0,
      industryCategory: body.industryCategory === 0 ? null : 0,
      taskCategory: body.taskCategory === 0 ? null : 0,
    };
  }
}

export const projectTransformer = new ProjectTransformer();
