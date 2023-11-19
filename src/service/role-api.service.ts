import { Api } from '@core';
import { ApiListQuery, ApiListResponse, ApiResponse, RoleRow } from '@common';

export class RoleApiService extends Api {
  async getRoleList<R = ApiListResponse<RoleRow, ApiListQuery>>(params: ApiListQuery): Promise<ApiResponse<R>> {
    return this.valueFrom(this.get('/roles', { params }));
  }

  async createRole() {
    return;
  }

  async updateRole() {
    return;
  }

  async deleteRole() {
    return;
  }
}

export const roleApiService = new RoleApiService();
