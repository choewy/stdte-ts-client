import QueryString from 'qs';
import { Axios, AxiosError, AxiosResponse } from 'axios';

import { ApiConfig } from '@common';

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

  protected async transform<D, E>(response: Promise<AxiosResponse<D, E>>) {
    try {
      const res = await response;

      return res.data;
    } catch (e) {
      const error = e as AxiosError;

      throw error.response.data;
    }
  }
}
