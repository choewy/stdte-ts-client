import { HttpClientDownloadResponse, HttpService } from '@core';

import { CustomerCreateBody, CustomerListQuery, CustomerList, CustomerRow, CustomerUpdateBody } from './types';

export class CustomerHttpService extends HttpService {
  async getList(query: CustomerListQuery) {
    return this.get<CustomerList>(this.url(), { params: query, delay: 250 });
  }

  async download() {
    return this.get<HttpClientDownloadResponse>(this.url('download'), { delay: 250 });
  }

  async createRow(body: CustomerCreateBody) {
    return this.post<CustomerRow>(this.url(), body, { delay: 250 });
  }

  async updateRow(id: number, body: Partial<CustomerUpdateBody>) {
    return this.patch<CustomerRow>(this.url(id), body, { delay: 250 });
  }

  async deleteRow(id: number) {
    return this.delete<null>(this.url(id), { delay: 250 });
  }
}

export const customerHttpService = new CustomerHttpService('customers');
