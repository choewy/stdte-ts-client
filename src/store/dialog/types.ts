import {
  BusinessCategoryRowResponse,
  CustomerRowResponse,
  RoleRow,
  TaskCategoryRowChild,
  TaskCategoryRowResponse,
  UserRowResponse,
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
    update: { open: boolean; row: UserRowResponse };
  };
  customer: {
    create: { open: boolean };
    update: { open: boolean; row: CustomerRowResponse };
    delete: { open: boolean; row: CustomerRowResponse };
  };
  businessCategory: {
    create: { open: boolean };
    update: { open: boolean; row: BusinessCategoryRowResponse };
    delete: { open: boolean; row: BusinessCategoryRowResponse };
  };
  industryCategory: {
    create: { open: boolean };
    update: { open: boolean; row: BusinessCategoryRowResponse };
    delete: { open: boolean; row: BusinessCategoryRowResponse };
  };
  taskCategory: {
    create: { open: boolean };
    update: { open: boolean; row: TaskCategoryRowResponse };
    delete: { open: boolean; row: TaskCategoryRowResponse };
    child: {
      create: { open: boolean; parant: TaskCategoryRowResponse };
      update: { open: boolean; row: TaskCategoryRowChild };
      delete: { open: boolean; row: TaskCategoryRowChild };
    };
  };
};
