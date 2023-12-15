import { HttpClientListQuery, HttpClientListResponse } from '@core';

export type SelectRowResponse = {
  id: number;
  name: string;
};

export type SelectListQuery = HttpClientListQuery;
export type SelectListResponse = HttpClientListResponse<SelectRowResponse, SelectListQuery>;
