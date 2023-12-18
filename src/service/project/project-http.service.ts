import { HttpService } from '@core';

import {
  ProjectCreateBody,
  ProjectList,
  ProjectListQuery,
  ProjectRow,
  ProjectUpdateBody,
  ProjectUpdateRecordBody,
} from './types';

export class ProjectHttpService extends HttpService {
  async getList(query: ProjectListQuery) {
    return this.get<ProjectList>(this.url(), { params: query, delay: 250 });
  }

  async getRowById(id: number) {
    return this.get<ProjectRow>(this.url(id), { delay: 250 });
  }

  async createRow(body: ProjectCreateBody) {
    return this.post<ProjectRow>(this.url(), body, { delay: 250 });
  }

  async updateRow(id: number, body: Partial<ProjectUpdateBody>) {
    return this.patch<ProjectRow>(this.url(id), body, { delay: 250 });
  }

  async updateRowOrderRecord(id: number, body: Partial<ProjectUpdateRecordBody>) {
    return this.patch<null>(this.url(id, 'order'), body, { delay: 250 });
  }

  async updateRowSaleRecord(id: number, body: Partial<ProjectUpdateRecordBody>) {
    return this.patch<null>(this.url(id, 'sale'), body, { delay: 250 });
  }

  async deleteRow(id: number) {
    return this.delete<null>(this.url(id), { delay: 250 });
  }
}

export const projectHttpService = new ProjectHttpService('projects');
