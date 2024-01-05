import { HttpClientListQuery, HttpClientListResponse } from '@core';

export type SelectRow = {
  id: number;
  name: string;
  description?: string;
  isDefault?: boolean;
};

export type SelectListQuery = HttpClientListQuery;
export type SelectList = HttpClientListResponse<SelectRow, SelectListQuery>;
