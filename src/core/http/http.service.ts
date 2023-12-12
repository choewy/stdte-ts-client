import axios, { Axios, AxiosRequestConfig, AxiosResponse } from 'axios';

import { AppConfig } from '@config';

import { HttpClientResponse } from './types';

export class HttpService {
  private readonly instance: Axios;

  constructor(protected readonly path: string = '') {
    this.path = this.path.startsWith('/') ? this.path : `/${this.path}`;
    this.instance = axios.create({
      baseURL: new AppConfig().getServerUrl(),
      withCredentials: true,
    });
  }

  private async transform<R>(request: () => Promise<AxiosResponse>): Promise<HttpClientResponse<R>> {
    const res = await request()
      .then((response) => ({ ok: true, data: response.data }))
      .catch((error) => ({ ok: false, data: error.response.data }));

    return {
      ok: res.ok,
      version: res.data?.version,
      request: {
        id: res.data?.request?.id,
        requestedAt: new Date(res.data?.request?.requestedAt),
        responsedAt: new Date(res.data?.request?.responsedAt),
      },
      data: res.ok ? res.data?.data : null,
      exception: res.ok ? null : res.data?.data,
    };
  }

  protected url(...args: (string | number)[]) {
    return [this.path, ...args].join('/');
  }

  protected async get<R, D = any>(url: string = '', config?: AxiosRequestConfig<D>) {
    return this.transform<R>(() => this.instance.get(url, config));
  }

  protected async post<R, D = any>(url: string = '', data?: D, config?: AxiosRequestConfig<D>) {
    return this.transform<R>(() => this.instance.post(url, data, config));
  }

  protected async patch<R, D = any>(url: string = '', data?: D, config?: AxiosRequestConfig<D>) {
    return this.transform<R>(() => this.instance.patch(url, data, config));
  }

  protected async put<R, D = any>(url: string = '', data?: D, config?: AxiosRequestConfig<D>) {
    return this.transform<R>(() => this.instance.put(url, data, config));
  }

  protected async delete<R, D = any>(url: string = '', config?: AxiosRequestConfig<D>) {
    return this.transform<R>(() => this.instance.delete(url, config));
  }
}
