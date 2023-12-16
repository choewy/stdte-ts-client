import { CredentialsStatus, Degree, RolePolicyKey, RolePolicyLevel, UserStatus } from '@common';
import { CredentialsChangeStatusComponentProperty } from './types';

export class EnumService {
  credentialsStatusToText(status: CredentialsStatus): string {
    switch (status) {
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

  credentialsStatusComponentProperties(status: CredentialsStatus) {
    const props: CredentialsChangeStatusComponentProperty[] = [];

    switch (status) {
      case CredentialsStatus.Wating:
        props.push(
          {
            label: '승인',
            message: '가입이 승인되었습니다.',
            status: {
              current: status,
              next: CredentialsStatus.Active,
            },
          },
          {
            label: '거절',
            message: '가입이 거절되었습니다.',
            status: {
              current: status,
              next: CredentialsStatus.Reject,
            },
          },
        );
        break;

      case CredentialsStatus.Reject:
        props.push({
          label: '승인',
          message: '가입이 승인되었습니다.',
          status: {
            current: status,
            next: CredentialsStatus.Active,
          },
        });
        break;

      case CredentialsStatus.Active:
        props.push({
          label: '비활성',
          message: '계정이 비활성 상태로 변경되었습니다.',
          status: {
            current: status,
            next: CredentialsStatus.Disable,
          },
        });
        break;

      case CredentialsStatus.Disable:
        props.push({
          label: '활성',
          message: '계정이 활성 상태로 변경되었습니다.',
          status: {
            current: status,
            next: CredentialsStatus.Active,
          },
        });
        break;
    }

    return props;
  }

  degreeToText(degree: Degree | string, defaultValue = ''): string {
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
        return defaultValue;
    }
  }

  rolePolicyKeyToText(key: RolePolicyKey) {
    switch (key) {
      case 'roleAndPolicy':
        return '역할 및 권한';

      case 'credentials':
        return '계정';

      case 'user':
        return '구성원';

      case 'project':
        return '사업';

      case 'customer':
        return '고객사';

      case 'businessCategory':
        return '사업분야';

      case 'industryCategory':
        return '산업구분';

      case 'taskCategory':
        return '수행업무구분';

      case 'setting':
        return '기타설정';

      default:
        return '';
    }
  }

  rolePolicyLevelToText(level: RolePolicyLevel) {
    switch (level) {
      case RolePolicyLevel.Limit:
        return '제한';

      case RolePolicyLevel.Read:
        return '조회';

      case RolePolicyLevel.Create:
        return '생성';

      case RolePolicyLevel.Update:
        return '수정';

      case RolePolicyLevel.Delete:
        return '삭제';

      case RolePolicyLevel.Admin:
        return '관리자';

      default:
        return '';
    }
  }

  usetStatusToText(status: UserStatus, defaultValue = '') {
    switch (status) {
      case UserStatus.Wating:
        return '-';

      case UserStatus.Active:
        return '재직';

      case UserStatus.Vacate:
        return '휴직';

      case UserStatus.Retire:
        return '퇴직';

      default:
        return defaultValue;
    }
  }
}

export const enumService = new EnumService();
