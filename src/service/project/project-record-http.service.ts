import { HttpService } from '@core';

import { ProjectRecordType } from './enums';
import {
  ProjectRecordCreateBody,
  ProjectRecordList,
  ProjectRecordListQuery,
  ProjectRecordRow,
  ProjectRecordUpdateBody,
} from './types';

export class ProjectRecordHttpService extends HttpService {
  async getList(projectId: number, query: ProjectRecordListQuery) {
    return this.get<ProjectRecordList>(this.url(projectId, 'records'), { params: query, delay: 250 });
  }

  async createRow(body: ProjectRecordCreateBody) {
    return this.post<ProjectRecordRow>(this.url('records'), body, { delay: 250 });
  }

  async updateRow(type: ProjectRecordType, id: number, body: ProjectRecordUpdateBody) {
    return this.patch<ProjectRecordRow>(this.url('records', type, id), body, { delay: 250 });
  }

  async deleteRow(type: ProjectRecordType, id: number) {
    return this.delete<null>(this.url('records', type, id), { delay: 250 });
  }
}

export const projectRecordHttpService = new ProjectRecordHttpService('projects');
