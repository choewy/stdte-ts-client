import { CredentialsStatus, Degree, GenderCode, RolePolicyProperty, UserStatus } from '@common';
import { HttpClientListQuery, HttpClientListResponse } from '@core';

export type UserCredentialsResponse = {
  email: string;
  status: CredentialsStatus;
};

export type UserRoleResponse = {
  id: number;
  name: string;
  rolePolicy: RolePolicyProperty;
  createdAt: string | null;
  updatedAt: string | null;
};

export type UserResponse = {
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
  credentials: UserCredentialsResponse;
  role: UserRoleResponse | null;
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

export type UserRowResponse = UserResponse;
export type UserListQuery = HttpClientListQuery;
export type UserListResponse = HttpClientListResponse<UserRowResponse, UserListQuery>;
