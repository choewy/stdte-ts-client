import { CredentialsStatus, Degree, GenderCode, RolePolicyProperty, UserStatus } from '@common';
import { HttpClientListQuery, HttpClientListResponse } from '@core';

export type UserRowCredentials = {
  email: string;
  status: CredentialsStatus;
};

export type UserRowRole = {
  id: number;
  name: string;
  rolePolicy: RolePolicyProperty;
  createdAt: string | null;
  updatedAt: string | null;
};

export type UserRow = {
  id: number;
  name: string;
  phone: string;
  gender: GenderCode | string;
  birthday: string;
  scienceNumber: string;
  degree: Degree | string;
  school: string;
  major: string;
  carType: string;
  carNumber: string;
  enteringDay: string;
  resignationDay: string;
  status: UserStatus;
  credentials: UserRowCredentials;
  role: UserRowRole | null;
  createdAt: string;
  updatedAt: string;
};

export type UserUpdateBody = {
  name: string;
  phone: string;
  birthday: string;
  gender: GenderCode | string;
  scienceNumber: string;
  degree: Degree | string;
  school: string;
  major: string;
  carType: string;
  carNumber: string;
  enteringDay: string;
  resignationDay: string;
};

export type UserListQuery = HttpClientListQuery;
export type UserList = HttpClientListResponse<UserRow, UserListQuery>;
export type UserRowUpdateBody = {
  name: string;
  phone: string;
  birthday: string;
  scienceNumber: string;
  degree: Degree | string;
  school: string;
  major: string;
  carType: string;
  carNumber: string;
  enteringDay: string;
  resignationDay: string;
  status: UserStatus;
  role: number | null;
};
