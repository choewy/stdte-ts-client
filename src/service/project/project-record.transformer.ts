import { ProjectRecordCreateBody, ProjectRecordUpdateBody } from './types';

export class ProjectRecordTransformer {
  createRow(body: ProjectRecordCreateBody): ProjectRecordCreateBody {
    return {
      ...body,
      amount: body.amount.replaceAll(',', ''),
    };
  }

  updateRow(body: ProjectRecordUpdateBody): ProjectRecordUpdateBody {
    return {
      ...body,
      amount: body.amount.replaceAll(',', ''),
    };
  }
}

export const projectRecordTransformer = new ProjectRecordTransformer();
