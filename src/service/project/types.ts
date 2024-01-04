import { ProjectStatus } from '@common';
import { HttpClientListQuery, HttpClientListResponse } from '@core';

import { ProjectRecordType } from './enums';

export type ProjectRowBusinessCategory = {
  id: number;
  name: string;
  description: string;
};

export type ProjectRowIndustryCategory = {
  id: number;
  name: string;
  description: string;
};

export type ProjectRowTaskCategory = {
  id: number;
  name: string;
  description: string;
};

export type ProjectRowCustomer = {
  id: number;
  kr: string;
  en: string;
  alias: string;
  description: string;
};

export type ProjectRowUser = {
  id: number;
  name: string;
};

export type ProjectRow = {
  id: number;
  name: string;
  code: string;
  description: string;
  difficulty: string;
  amount: string;
  status: ProjectStatus;
  startDate: string;
  endDate: string;
  months: number;
  businessCategory: ProjectRowIndustryCategory | null;
  industryCategory: ProjectRowBusinessCategory | null;
  taskCategory: ProjectRowTaskCategory | null;
  customer: ProjectRowCustomer | null;
  externalManagers: ProjectRowUser[];
  internalManagers: ProjectRowUser[];
  internalLeaders: ProjectRowUser[];
  canExpose: boolean;
  createdAt: string;
  updatedAt: string;
};

export type ProjectListQuery = HttpClientListQuery & {
  businessCategory?: number;
  industryCategory?: number;
  canExpose?: boolean;
  customer?: number;
  status?: ProjectStatus;
};

export type ProjectList = HttpClientListResponse<ProjectRow, ProjectListQuery> & {
  amounts: string;
};

export type ProjectCreateBody = {
  name: string;
  code: string;
  description: string;
  difficulty: string;
  amount: string;
  status: ProjectStatus;
  startDate: string;
  endDate: string;
  customer: number | null;
  businessCategory: number | null;
  industryCategory: number | null;
  taskCategory: number | null;
  externalManagers: number[];
  internalManagers: number[];
  internalLeaders: number[];
  canExpose: boolean;
};

export type ProjectUpdateBody = {
  name: string;
  code: string;
  description: string;
  difficulty: string;
  amount: string;
  status: ProjectStatus;
  startDate: string;
  endDate: string;
  customer: number | null;
  businessCategory: number | null;
  industryCategory: number | null;
  taskCategory: number | null;
  externalManagers: number[];
  internalManagers: number[];
  internalLeaders: number[];
  canExpose: boolean;
};

export type ProjectRecordRow = {
  id: number;
  date: string;
  amount: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type ProjectRecordListQuery = HttpClientListQuery & { type: ProjectRecordType };
export type ProjectRecordList = HttpClientListResponse<ProjectRecordRow, ProjectRecordListQuery>;

export type ProjectRecordCreateBody = {
  type: ProjectRecordType;
  project: number;
  date: string;
  amount: string;
  description: string;
};

export type ProjectRecordUpdateBody = {
  date: string;
  amount: string;
  description: string;
};
