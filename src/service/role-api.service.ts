import { Api } from '@core';
import { ApiListQuery, ApiListResponse, ApiResponse, Role } from '@common';

export class RoleApiService extends Api {
  async getRoleList<R = ApiListResponse<Role, ApiListQuery>>(params: ApiListQuery): Promise<ApiResponse<R>> {
    return this.valueFrom(this.get('/roles', { params }));
  }
}

export const roleApiService = new RoleApiService();
