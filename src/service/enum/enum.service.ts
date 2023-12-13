import { CredentialsStatus, Degree } from '@common';

export class EnumService {
  credentialsStatusToText(credentialsStatus: CredentialsStatus): string {
    switch (credentialsStatus) {
      case CredentialsStatus.Wating:
        return '대기';

      case CredentialsStatus.Reject:
        return '거절';

      case CredentialsStatus.Active:
        return '활성';

      case CredentialsStatus.Disable:
        return '비활성';

      default:
        return '';
    }
  }

  degreeToText(degree: Degree | string): string {
    switch (degree) {
      case Degree.HighSchool:
        return '고졸';

      case Degree.Bachelor2Years:
        return '전문학사';

      case Degree.Bachelor4Years:
        return '학사';

      case Degree.Master:
        return '석사';

      case Degree.Doctor:
        return '박사';

      default:
        return '';
    }
  }
}

export const enumService = new EnumService();
