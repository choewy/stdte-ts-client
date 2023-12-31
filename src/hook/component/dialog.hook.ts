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
  TASK_CATEGORY_ROW,
  TaskCategoryRow,
  TaskCategoryRowChild,
  TASK_CATEGORY_ROW_CHILD,
  ProjectRow,
  PROJECT_ROW,
  ProjectRecordRow,
  ProjectRecordType,
  PROJECT_RECORD_ROW,
  TimeRecordRow,
  TimeProjectRow,
  TimeProjectRowTaskCategoryChild,
  DateTimeRowProperty,
  TIME_RECORD_ROW,
} from '@service';

export class DialogHook {
  useMyPageUpdatePasswordDialogCallback(open: boolean) {
    const setDialog = dialogStore.useSetState();

    return useCallback(() => {
      setDialog((prev) => ({
        ...prev,
        mypage: { ...prev.mypage, updatePassword: { open } },
      }));
    }, [open, setDialog]);
  }

  useCredentialsUpdatePasswordDialogCallback(id: number, open: boolean) {
    const setDialog = dialogStore.useSetState();

    return useCallback(() => {
      setDialog((prev) => ({
        ...prev,
        credentials: {
          ...prev.credentials,
          updatePassword: { id: open === true ? id : 0, open },
        },
      }));
    }, [id, open, setDialog]);
  }

  useRoleDialogsCallback(...args: ['create', boolean] | ['update' | 'delete' | 'users', boolean, RoleRow]) {
    const setDialog = dialogStore.useSetState();

    return useCallback(() => {
      const [key, open, row] = args;

      switch (key) {
        case 'create':
          setDialog((prev) => ({
            ...prev,
            role: { ...prev.role, create: { open } },
          }));
          break;

        case 'update':
        case 'delete':
        case 'users':
          setDialog((prev) => ({
            ...prev,
            role: { ...prev.role, [key]: { open, row: open === true ? row : ROLE_ROW } },
          }));
          break;
      }
    }, [args, setDialog]);
  }

  useUserDialogCallback(...args: ['update', boolean, UserRow]) {
    const setDialog = dialogStore.useSetState();

    return useCallback(() => {
      const [key, open, row] = args;

      setDialog((prev) => ({
        ...prev,
        user: {
          ...prev.user,
          [key]: { open, row: open === false ? USER_ROW : row },
        },
      }));
    }, [args, setDialog]);
  }

  useCustomerDialogCallback(...args: ['create', boolean] | ['update' | 'delete', boolean, CustomerRow]) {
    const setDialog = dialogStore.useSetState();

    return useCallback(() => {
      const [key, open, row] = args;

      switch (key) {
        case 'create':
          setDialog((prev) => ({
            ...prev,
            customer: { ...prev.customer, create: { open } },
          }));
          break;

        case 'update':
        case 'delete':
          setDialog((prev) => ({
            ...prev,
            customer: { ...prev.customer, [key]: { open, row: open === false ? CUSTOMER_ROW : row } },
          }));
          break;
      }
    }, [args, setDialog]);
  }

  useBusinessCategoryDialogCallback(
    ...args: ['create', boolean] | ['update' | 'delete', boolean, BusinessCategoryRow]
  ) {
    const setDialog = dialogStore.useSetState();

    return useCallback(() => {
      const [key, open, row] = args;

      switch (key) {
        case 'create':
          setDialog((prev) => ({
            ...prev,
            businessCategory: { ...prev.businessCategory, create: { open } },
          }));
          break;

        case 'update':
        case 'delete':
          setDialog((prev) => ({
            ...prev,
            businessCategory: {
              ...prev.businessCategory,
              [key]: { open, row: open === false ? BUSINESS_CATEGORY_ROW : row },
            },
          }));
          break;
      }
    }, [args, setDialog]);
  }

  useIndustryCategoryDialogCallback(
    ...args: ['create', boolean] | ['update' | 'delete', boolean, IndustryCategoryRow]
  ) {
    const setDialog = dialogStore.useSetState();

    return useCallback(() => {
      const [key, open, row] = args;

      switch (key) {
        case 'create':
          setDialog((prev) => ({
            ...prev,
            industryCategory: { ...prev.industryCategory, create: { open } },
          }));
          break;

        case 'update':
        case 'delete':
          setDialog((prev) => ({
            ...prev,
            industryCategory: {
              ...prev.industryCategory,
              [key]: { open, row: open === false ? INDUSTRY_CATEGORY_ROW : row },
            },
          }));
          break;
      }
    }, [args, setDialog]);
  }

  useTaskCategoryDialogCallback(
    ...args: ['create', boolean] | ['update' | 'delete' | 'children', boolean, TaskCategoryRow]
  ) {
    const setDialog = dialogStore.useSetState();

    return useCallback(() => {
      const [key, open, row] = args;

      switch (key) {
        case 'create':
          setDialog((prev) => ({
            ...prev,
            taskCategory: { ...prev.taskCategory, create: { open } },
          }));
          break;

        case 'update':
        case 'delete':
        case 'children':
          setDialog((prev) => ({
            ...prev,
            taskCategory: {
              ...prev.taskCategory,
              [key]: { open, row: open === false ? TASK_CATEGORY_ROW : row },
            },
          }));
          break;
      }
    }, [args, setDialog]);
  }

  useTaskCategoryChildDialogCallback(
    ...args:
      | ['create', TaskCategoryRow, boolean]
      | ['update' | 'delete', TaskCategoryRow, boolean, TaskCategoryRowChild]
  ) {
    const setDialog = dialogStore.useSetState();

    return useCallback(() => {
      const [key, parent, open, child] = args;

      switch (key) {
        case 'create':
          setDialog((prev) => ({
            ...prev,
            taskCategory: {
              ...prev.taskCategory,
              child: {
                ...prev.taskCategory.child,
                create: { open, parent: open === false ? TASK_CATEGORY_ROW : parent },
              },
            },
          }));
          break;

        case 'update':
        case 'delete':
          setDialog((prev) => ({
            ...prev,
            taskCategory: {
              ...prev.taskCategory,
              child: {
                ...prev.taskCategory.child,
                [key]: {
                  open,
                  parent: open === false ? TASK_CATEGORY_ROW : parent,
                  child: open === false ? TASK_CATEGORY_ROW_CHILD : child,
                },
              },
            },
          }));
          break;
      }
    }, [args, setDialog]);
  }

  useProjectDialogCallback(...args: ['create', boolean] | ['update' | 'delete' | 'record', boolean, ProjectRow]) {
    const setDialog = dialogStore.useSetState();

    return useCallback(() => {
      const [key, open, row] = args;

      switch (key) {
        case 'create':
          setDialog((prev) => ({
            ...prev,
            project: { ...prev.project, [key]: { open } },
          }));
          break;

        case 'update':
        case 'delete':
        case 'record':
          setDialog((prev) => ({
            ...prev,
            project: { ...prev.project, [key]: { open, row: open === false ? PROJECT_ROW : row } },
          }));
          break;
      }
    }, [args, setDialog]);
  }

  useProjectRecordDialogCallback(
    type: ProjectRecordType,
    ...args: ['create', boolean, ProjectRow] | ['update' | 'delete', boolean, ProjectRecordRow]
  ) {
    const setDialog = dialogStore.useSetState();

    return useCallback(() => {
      const [key, open, row] = args;

      switch (key) {
        case 'create':
          setDialog((prev) => ({
            ...prev,
            projectRecord: {
              ...prev.projectRecord,
              [type]: { ...prev.projectRecord[type], [key]: { open, row } },
            },
          }));
          break;

        case 'update':
        case 'delete':
          setDialog((prev) => ({
            ...prev,
            projectRecord: {
              ...prev.projectRecord,
              [type]: {
                ...prev.projectRecord[type],
                [key]: { open, row: open === false ? PROJECT_RECORD_ROW : row },
              },
            },
          }));
          break;
      }
    }, [type, args, setDialog]);
  }

  useTimeRecordDialog(
    ...args:
      | [
          'upsert',
          boolean,
          TimeRecordRow | undefined,
          TimeProjectRow,
          TimeProjectRowTaskCategoryChild,
          DateTimeRowProperty,
        ]
  ) {
    const setDialog = dialogStore.useSetState();

    return useCallback(() => {
      const [key, open, row, project, child, date] = args;

      switch (key) {
        case 'upsert':
          setDialog((prev) => ({
            ...prev,
            timeRecord: {
              ...prev.timeRecord,
              [key]: {
                ...prev.timeRecord[key],
                open,
                row:
                  open === true
                    ? {
                        ...(row ?? TIME_RECORD_ROW),
                        date: date.date,
                        project: project.id,
                        category: {
                          parent: project.category.id,
                          child: child.id,
                        },
                      }
                    : TIME_RECORD_ROW,
                project,
                child,
                date,
              },
            },
          }));
          break;
      }
    }, [args]);
  }
}

export const dialogHook = new DialogHook();
