import { CredentialsStatus } from './enums';

export const toCredentialsStatusText = (status: CredentialsStatus) => {
  switch (status) {
    case CredentialsStatus.Wating:
      return '대기';

    case CredentialsStatus.Reject:
      return '거절';

    case CredentialsStatus.Active:
      return '활성';

    case CredentialsStatus.Disable:
      return '비활성';
  }
};
