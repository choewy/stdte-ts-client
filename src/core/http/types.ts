import { AxiosRequestConfig } from 'axios';

export type HttpClientrequestConfig<D> = AxiosRequestConfig<D> & {
  delay?: number;
};

export type HttpClientRequest = {
  id: string;
  requestedAt: Date;
  responsedAt: Date;
};

export type HttpClientException = {
  status: number;
  name: string;
  message: string;
  cause?: {
    name?: string;
    message?: string;
  };
};

export type HttpClientResponse<R> =
  | {
      ok: true;
      version: string;
      request: HttpClientRequest;
      data: R;
      exception: null;
    }
  | {
      ok: false;
      version: string;
      request: HttpClientRequest;
      data: null;
      exception: HttpClientException;
    };

export type HttpClientListQuery = {
  skip: number;
  take: number;
};

export type HttpClientListResponse<R, Q = any> = {
  total: number;
  rows: R[];
  query: Q;
};
