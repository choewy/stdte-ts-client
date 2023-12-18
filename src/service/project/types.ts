import { ProjectStatus } from '@common';
import { HttpClientListQuery, HttpClientListResponse } from '@core';

export type ProjectRowOrderRecord = {
  date: string;
  amount: string;
  createdAt: string;
  updatedAt: string;
};

export type ProjectRowSaleRecord = {
  date: string;
  amount: string;
  createdAt: string;
  updatedAt: string;
};

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
  keepDate: string;
  orderRecord: ProjectRowOrderRecord;
  saleRecord: ProjectRowSaleRecord;
  businessCategory: ProjectRowIndustryCategory | null;
  industryCategory: ProjectRowBusinessCategory | null;
  taskCategory: ProjectRowTaskCategory | null;
  customer: ProjectRowCustomer | null;
  internalOwners: ProjectRowUser[];
  internalManagers: ProjectRowUser[];
  internalLeaders: ProjectRowUser[];
  externalOwners: ProjectRowUser[];
  externalManagers: ProjectRowUser[];
  externalLeaders: ProjectRowUser[];
  canExpose: boolean;
  createdAt: string;
  updatedAt: string;
};

export type ProjectListQuery = HttpClientListQuery;
export type ProjectList = HttpClientListResponse<ProjectRow, ProjectListQuery>;

export type ProjectCreateBody = {
  name: string;
  code: string;
  description: string;
  difficulty: string;
  amount: string;
  status: ProjectStatus;
  startDate: string;
  endDate: string;
  keepDate: string;
  customer: number;
  businessCategory: number;
  industryCategory: number;
  taskCategory: number;
  internalOwners: number[];
  internalManagers: number[];
  internalLeaders: number[];
  externalOwners: number[];
  externalManagers: number[];
  externalLeaders: number[];
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
  keepDate: string;
  customer: number;
  businessCategory: number;
  industryCategory: number;
  taskCategory: number;
  internalOwners: number[];
  internalManagers: number[];
  internalLeaders: number[];
  externalOwners: number[];
  externalManagers: number[];
  externalLeaders: number[];
  canExpose: boolean;
};

export type ProjectUpdateRecordBody = {
  date: string;
  amount: string;
};
