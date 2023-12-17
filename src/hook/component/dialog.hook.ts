import { useCallback } from 'react';

import { dialogStore } from '@store';
import {
  BUSINESS_CATEGORY_ROW,
  BusinessCategoryRow,
  CUSTOMER_ROW,
  CustomerRow,
  INDUSTRY_CATEGORY_ROW,
  IndustryCategoryRow,
  USER_ROW,
  ROLE_ROW,
  RoleRow,
  UserRow,
} from '@service';

export class DialogHook {
  useMyPageUpdatePasswordDialogCallback(open: boolean) {
    const setDialog = dialogStore.useSetState();

    return useCallback(() => {
      setDialog((prev) => ({
        ...prev,
        mypage: {
          ...prev.mypage,
          updatePassword: { open },
        },
      }));
    }, [open, setDialog]);
  }

  useCredentialsPageUpdatePasswordDialogCallback(id: number, open: boolean) {
    const setDialog = dialogStore.useSetState();

    return useCallback(() => {
      setDialog((prev) => ({
        ...prev,
        credentials: {
          ...prev.credentials,
          updatePassword: {
            id: open === true ? id : 0,
            open,
          },
        },
      }));
    }, [id, open, setDialog]);
  }

  useRolePageCreateDialogCallback(open: boolean) {
    const setDialog = dialogStore.useSetState();

    return useCallback(() => {
      setDialog((prev) => ({
        ...prev,
        role: {
          ...prev.role,
          create: { open },
        },
      }));
    }, [open, setDialog]);
  }

  useRolePageDialogsCallback(key: 'update' | 'delete' | 'users', row: RoleRow, open: boolean) {
    const setDialog = dialogStore.useSetState();

    return useCallback(() => {
      setDialog((prev) => ({
        ...prev,
        role: {
          ...prev.role,
          [key]: { open, row: open === true ? row : ROLE_ROW },
        },
      }));
    }, [key, row, open, setDialog]);
  }

  useUserPageDialogCallback(key: 'update', row: UserRow, open: boolean) {
    const setDialog = dialogStore.useSetState();

    return useCallback(() => {
      setDialog((prev) => ({
        ...prev,
        user: {
          ...prev.user,
          [key]: { open, row: open === false ? USER_ROW : row },
        },
      }));
    }, [key, row, open, setDialog]);
  }

  useBusinessCategoryPageCreateDialogCallback(open: boolean) {
    const setDialog = dialogStore.useSetState();

    return useCallback(() => {
      setDialog((prev) => ({
        ...prev,
        businessCategory: {
          ...prev.businessCategory,
          create: { open },
        },
      }));
    }, [open, setDialog]);
  }

  useBusinessCategoryPageDialogCallback(key: 'update' | 'delete', row: BusinessCategoryRow, open: boolean) {
    const setDialog = dialogStore.useSetState();

    return useCallback(() => {
      setDialog((prev) => ({
        ...prev,
        businessCategory: {
          ...prev.businessCategory,
          [key]: { open, row: open === false ? BUSINESS_CATEGORY_ROW : row },
        },
      }));
    }, [key, row, open, setDialog]);
  }

  useIndustryCategoryPageCreateDialogCallback(open: boolean) {
    const setDialog = dialogStore.useSetState();

    return useCallback(() => {
      setDialog((prev) => ({
        ...prev,
        industryCategory: {
          ...prev.industryCategory,
          create: { open },
        },
      }));
    }, [open, setDialog]);
  }

  useIndustryCategoryPageDialogCallback(key: 'update' | 'delete', row: IndustryCategoryRow, open: boolean) {
    const setDialog = dialogStore.useSetState();

    return useCallback(() => {
      setDialog((prev) => ({
        ...prev,
        industryCategory: {
          ...prev.industryCategory,
          [key]: { open, row: open === false ? INDUSTRY_CATEGORY_ROW : row },
        },
      }));
    }, [key, row, open, setDialog]);
  }

  useCustomerPageCreateDialogCallback(open: boolean) {
    const setDialog = dialogStore.useSetState();

    return useCallback(() => {
      setDialog((prev) => ({
        ...prev,
        customer: {
          ...prev.customer,
          create: { open },
        },
      }));
    }, [open, setDialog]);
  }

  useCustomerPageDialogCallback(key: 'update' | 'delete', row: CustomerRow, open: boolean) {
    const setDialog = dialogStore.useSetState();

    return useCallback(() => {
      setDialog((prev) => ({
        ...prev,
        customer: {
          ...prev.customer,
          [key]: { open, row: open === false ? CUSTOMER_ROW : row },
        },
      }));
    }, [key, row, open, setDialog]);
  }
}

export const dialogHook = new DialogHook();
