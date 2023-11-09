import QueryString from 'qs';
import { Axios } from 'axios';

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
}
