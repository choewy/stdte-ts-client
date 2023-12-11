export type HttpClientRequest = {
  id: string;
  requestedAt: Date;
  responsedAt: Date;
};

export type HttpClientException = {
  status: number;
  name: string;
  message?: string;
  cause?: {
    name?: string;
    message?: string;
  };
};

export type HttpClientResponse<R> = {
  ok: boolean;
  version: string;
  request: HttpClientRequest;
  data: R | null;
  exception: HttpClientException | null;
};
