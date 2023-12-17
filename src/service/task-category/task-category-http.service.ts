import { HttpService } from '@core';

import {
  TaskCategoryCreateBody,
  TaskCategoryCreateChildBody,
  TaskCategoryListQuery,
  TaskCategoryListResponse,
  TaskCategoryRowChild,
  TaskCategoryRowResponse,
  TaskCategoryUpdateBody,
} from './types';

export class TaskCategoryHttpService extends HttpService {
  async getList(query: TaskCategoryListQuery) {
    return this.get<TaskCategoryListResponse>(this.url(), { params: query, delay: 250 });
  }

  async getRow(id: number) {
    return this.get<TaskCategoryRowResponse>(this.url(id), { delay: 250 });
  }

  async createRow(body: TaskCategoryCreateBody) {
    return this.post<TaskCategoryRowResponse>(this.url(), body, { delay: 250 });
  }

  async updateRow(id: number, body: TaskCategoryUpdateBody) {
    return this.patch<TaskCategoryRowResponse>(this.url(id), body, { delay: 250 });
  }

  async deleteRow(id: number) {
    return this.delete<null>(this.url(id), { delay: 250 });
  }

  async createChild(body: TaskCategoryCreateChildBody) {
    return this.post<TaskCategoryRowChild>(this.url('child'), body, { delay: 250 });
  }

  async updateChild(id: number, body: TaskCategoryUpdateBody) {
    return this.patch<TaskCategoryRowChild>(this.url('child', id), body, { delay: 250 });
  }

  async deleteChild(id: number) {
    return this.delete<null>(this.url('child', id), { delay: 250 });
  }
}

export const taskCategoryHttpService = new TaskCategoryHttpService('category/task');
