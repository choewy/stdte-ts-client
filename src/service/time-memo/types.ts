import { HttpClientListResponse } from '@core';

export type TimeMemoRow = {
  id: number;
  date: string;
  text: string;
  updatedAt: string;
};

export type TimeMemoListQuery = {
  user: number;
  s: string;
  e: string;
};

export type TimeMemoList = Omit<HttpClientListResponse<TimeMemoRow, TimeMemoListQuery>, 'query'>;

export type TimeMemoUpsertBody = {
  id: number | null;
  user: number;
  date: string;
  text: string;
};
