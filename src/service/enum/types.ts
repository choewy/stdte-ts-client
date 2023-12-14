import { CredentialsStatus } from '@common';

export type CredentialsChangeStatusComponentProperty = {
  label: string;
  message: string;
  status: {
    current: CredentialsStatus;
    next: CredentialsStatus;
  };
};
