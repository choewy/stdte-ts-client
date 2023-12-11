import { CredentialsStatus } from './enums';

export type Credentials = {
  id: number;
  email: string;
  status: CredentialsStatus;
  createdAt: string;
  updatedAt: string;
};
