import { HttpClientListResponse } from '@core';

export type TimeLogRow = {
  id: number;
  name: string;
  updatedAt: string;
};

export type TimeLogList = HttpClientListResponse<TimeLogRow, {}>;
