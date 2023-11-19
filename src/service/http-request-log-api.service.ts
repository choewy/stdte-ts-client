import { Api } from '@core';
import { ApiListResponse, ApiResponse, HttpRequestLog, HttpRequestLogQuery } from '@common';

export class HttpRequestLogApiService extends Api {
  async getLogList<R = ApiListResponse<HttpRequestLog, HttpRequestLogQuery>>(
    body: HttpRequestLogQuery,
  ): Promise<ApiResponse<R>> {
    return this.valueFrom<R>(this.post('/logs', body));
  }
}

export const httpRequestLogApiService = new HttpRequestLogApiService();
