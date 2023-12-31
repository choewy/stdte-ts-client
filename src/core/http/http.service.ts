import axios, { Axios, AxiosResponse } from 'axios';

import { AppConfig } from '@config';

import { HttpClientResponse, HttpClientrequestConfig } from './types';
import { LoadingEvent } from '../loading';

export class HttpService {
  private readonly instance: Axios;

  constructor(protected readonly path: string = '') {
    this.path = this.path.startsWith('/') ? this.path : `/${this.path}`;
    this.instance = axios.create({
      baseURL: new AppConfig().getServerUrl(),
      withCredentials: true,
    });
  }

  private async transform<R>(
    request: () => Promise<AxiosResponse>,
    delay?: number,
    smooth?: boolean,
  ): Promise<HttpClientResponse<R>> {
    if (smooth !== true) {
      LoadingEvent.dispatch(true);
    }

    const res = await new Promise<{ ok: boolean; data: any }>(async (resolve) => {
      const res = await request()
        .then((response) => ({ ok: true, data: response?.data }))
        .catch((error) => ({ ok: false, data: error.response?.data }));

      if (delay == null) {
        resolve(res);
      }

      const timeout = setTimeout(() => {
        clearTimeout(timeout);
        resolve(res);
      }, delay);
    });

    if (smooth !== true) {
      LoadingEvent.dispatch(false);
    }

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

  protected async head<R, D = any>(url: string = '', config?: HttpClientrequestConfig<D>) {
    return this.transform<R>(() => this.instance.head(url, config), config?.delay, config?.smooth);
  }

  protected async get<R, D = any>(url: string = '', config?: HttpClientrequestConfig<D>) {
    return this.transform<R>(() => this.instance.get(url, config), config?.delay, config?.smooth);
  }

  protected async post<R, D = any>(url: string = '', data?: D, config?: HttpClientrequestConfig<D>) {
    return this.transform<R>(() => this.instance.post(url, data, config), config?.delay, config?.smooth);
  }

  protected async patch<R, D = any>(url: string = '', data?: D, config?: HttpClientrequestConfig<D>) {
    return this.transform<R>(() => this.instance.patch(url, data, config), config?.delay, config?.smooth);
  }

  protected async put<R, D = any>(url: string = '', data?: D, config?: HttpClientrequestConfig<D>) {
    return this.transform<R>(() => this.instance.put(url, data, config), config?.delay, config?.smooth);
  }

  protected async delete<R, D = any>(url: string = '', config?: HttpClientrequestConfig<D>) {
    return this.transform<R>(() => this.instance.delete(url, config), config?.delay, config?.smooth);
  }
}
