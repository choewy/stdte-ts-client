import { Api } from '@core';
import { ApiListQuery, ApiListResponse, ApiResponse, RoleRow } from '@common';

import { RoleCreateBody, RoleUpdateBody } from './types';

export class RoleApiService extends Api {
  async getRoleList<R = ApiListResponse<RoleRow, ApiListQuery>>(params: ApiListQuery): Promise<ApiResponse<R>> {
    return this.valueFrom(this.get('/roles', { params }));
  }

  async createRole<R = undefined>(body: RoleCreateBody): Promise<ApiResponse<R>> {
    return this.valueFrom(this.post('/roles', body));
  }

  async updateRole<R = undefined>(id: number, body: RoleUpdateBody): Promise<ApiResponse<R>> {
    return this.valueFrom(this.patch(`/roles/${id}`, body));
  }

  async deleteRole<R = undefined>(id: number): Promise<ApiResponse<R>> {
    return this.valueFrom(this.delete(`/roles/${id}`));
  }
}

export const roleApiService = new RoleApiService();
