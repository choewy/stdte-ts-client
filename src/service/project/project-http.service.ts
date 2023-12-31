import { HttpClientDownloadResponse, HttpService } from '@core';

import { ProjectCreateBody, ProjectList, ProjectListQuery, ProjectRow, ProjectUpdateBody } from './types';

export class ProjectHttpService extends HttpService {
  async getList(query: ProjectListQuery) {
    return this.get<ProjectList>(this.url(), { params: query, delay: 250 });
  }

  async download() {
    return this.get<HttpClientDownloadResponse>(this.url('download'));
  }

  async createRow(body: ProjectCreateBody) {
    return this.post<ProjectRow>(this.url(), body, { delay: 250 });
  }

  async updateRow(id: number, body: Partial<ProjectUpdateBody>) {
    return this.patch<ProjectRow>(this.url(id), body, { delay: 250 });
  }

  async deleteRow(id: number) {
    return this.delete<null>(this.url(id), { delay: 250 });
  }
}

export const projectHttpService = new ProjectHttpService('projects');
