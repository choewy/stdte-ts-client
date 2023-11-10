import QueryString from 'qs';
import { Axios, AxiosError, AxiosResponse } from 'axios';

import { ApiConfig, ApiException, ApiResponse } from '@common';

export class Api extends Axios {
  constructor() {
    super({
      baseURL: new ApiConfig().getHttpApiUrl(),
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
      transformRequest: [(data) => data],
      transformResponse: [(data) => (data === undefined ? null : JSON.parse(data))],
      paramsSerializer: (params) => QueryString.stringify(params, { arrayFormat: 'brackets' }),
    });
  }

  protected async valueFrom<D>(response: Promise<AxiosResponse<D, ApiException>>) {
    const res: ApiResponse<D> = {
      ok: false,
      data: null,
      exception: null,
    };

    try {
      const { data } = await response;

      res.ok = true;
      res.data = data;
      res.exception = null;
    } catch (e) {
      const error = e as AxiosError;

      res.ok = false;
      res.data = null;
      res.exception = error.response?.data as ApiException;
    }

    return res;
  }
}
