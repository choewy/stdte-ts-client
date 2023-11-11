import QueryString from 'qs';
import { Axios, AxiosResponse } from 'axios';

import { ApiConfig, ApiException, ApiResponse } from '@common';

export class Api extends Axios {
  constructor() {
    super({
      baseURL: new ApiConfig().getHttpApiUrl(),
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
      transformRequest: [
        (data) => {
          let value;

          try {
            value = JSON.stringify(data);
          } catch {
            value = data;
          }

          return value;
        },
      ],
      transformResponse: [
        (data) => {
          let value;

          try {
            value = JSON.parse(data);
          } catch {
            value = data;
          }

          return value;
        },
      ],
      paramsSerializer: (params) => QueryString.stringify(params, { arrayFormat: 'brackets' }),
    });
  }

  protected async valueFrom<D>(request: Promise<AxiosResponse<D, ApiException>>) {
    const res: ApiResponse<D> = {
      ok: false,
      data: null,
      exception: null,
    };

    try {
      const response = await request;

      if (response.status >= 400) {
        throw response.data;
      }

      res.ok = true;
      res.data = response.data;
      res.exception = null;
    } catch (e) {
      res.ok = false;
      res.data = null;
      res.exception = e as ApiException;
    }

    return res;
  }
}
