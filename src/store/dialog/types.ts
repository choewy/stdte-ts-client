import {
  BusinessCategoryRow,
  CustomerRow,
  RoleRow,
  TaskCategoryRowChild,
  TaskCategoryRow,
  UserRow,
  ProjectRow,
} from '@service';

export type DialogStoreProps = {
  mypage: {
    updatePassword: { open: boolean };
  };
  credentials: {
    updatePassword: { id: number; open: boolean };
  };
  role: {
    create: { open: boolean };
    users: { open: boolean; row: RoleRow };
    update: { open: boolean; row: RoleRow };
    delete: { open: boolean; row: RoleRow };
  };
  user: {
    update: { open: boolean; row: UserRow };
  };
  customer: {
    create: { open: boolean };
    update: { open: boolean; row: CustomerRow };
    delete: { open: boolean; row: CustomerRow };
  };
  businessCategory: {
    create: { open: boolean };
    update: { open: boolean; row: BusinessCategoryRow };
    delete: { open: boolean; row: BusinessCategoryRow };
  };
  industryCategory: {
    create: { open: boolean };
    update: { open: boolean; row: BusinessCategoryRow };
    delete: { open: boolean; row: BusinessCategoryRow };
  };
  taskCategory: {
    create: { open: boolean };
    update: { open: boolean; row: TaskCategoryRow };
    delete: { open: boolean; row: TaskCategoryRow };
    children: { open: boolean; row: TaskCategoryRow };
    child: {
      create: { open: boolean; parent: TaskCategoryRow };
      update: { open: boolean; parent: TaskCategoryRow; child: TaskCategoryRowChild };
      delete: { open: boolean; parent: TaskCategoryRow; child: TaskCategoryRowChild };
    };
  };
  project: {
    create: { open: boolean };
    record: { open: boolean; row: ProjectRow };
    update: { open: boolean; row: ProjectRow };
    delete: { open: boolean; row: ProjectRow };
  };
};
