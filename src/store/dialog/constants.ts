import { CredentialsStatus, UserStatus } from '@common';
import { UserRowResponse } from '@service';

export const DIALOG_DEFAULT_USER_ROW: UserRowResponse = {
  id: 0,
  name: '',
  phone: '',
  gender: '',
  birthday: '',
  scienceNumber: '',
  degree: '',
  school: '',
  major: '',
  carType: '',
  carNumber: '',
  enteringDay: '',
  resignationDay: '',
  status: UserStatus.Wating,
  credentials: {
    email: '',
    status: CredentialsStatus.Wating,
  },
  role: null,
  createdAt: '',
  updatedAt: '',
};
