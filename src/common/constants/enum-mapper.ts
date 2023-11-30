import { AuthStatus, EmploymentStatus, Degree, PagePath, ProjectScope, ProjectStatus, RolePolicyScope } from './enums';

export class EnumMapper {
  static getPageTitle(value: PagePath) {
    switch (value) {
      case PagePath.Home:
        return '홈';

      case PagePath.Forbidden:
        return '접근제한';

      case PagePath.SignIn:
        return '로그인';

      case PagePath.SignUp:
        return '회원가입';

      case PagePath.MyPage:
        return '내정보';

      case PagePath.Role:
        return '역할 관리';

      case PagePath.Credential:
        return '계정 관리';

      case PagePath.TimeRecordTable:
        return '시간기록 테이블';

      case PagePath.TimeRecordAnalytics:
        return '시간기록 집계';

      case PagePath.Team:
        return '팀 목록';

      case PagePath.Member:
        return '구성원 목록';

      case PagePath.ProjectTable:
        return '프로젝트 목록';

      case PagePath.ProjectSetting:
        return '프로젝트 설정';

      case PagePath.HttpRequestLog:
        return 'Http 요청 로그';
    }
  }

  static getAuthStatusText(value: AuthStatus) {
    switch (value) {
      case AuthStatus.Wating:
        return '승인대기';

      case AuthStatus.Reject:
        return '승인거절';

      case AuthStatus.Active:
        return '활성';

      case AuthStatus.Disable:
        return '비활성';
    }
  }

  static getEmploymentStatusText(value: EmploymentStatus) {
    switch (value) {
      case EmploymentStatus.Wating:
        return '확인필요';

      case EmploymentStatus.Active:
        return '재직';

      case EmploymentStatus.Vacate:
        return '휴직';

      case EmploymentStatus.Retire:
        return '퇴직';
    }
  }

  static getDegreeText(value: Degree) {
    switch (value) {
      case Degree.Null:
        return '없음';

      case Degree.HighSchool:
        return '고졸';

      case Degree.Bachelor2Years:
        return '전문학사';

      case Degree.Bachelor4Years:
        return '일반학사';

      case Degree.Master:
        return '석사';

      case Degree.Doctor:
        return '박사';
    }
  }

  static getRolePolicyScopeText(value: RolePolicyScope) {
    switch (value) {
      case RolePolicyScope.Limit:
        return '제한';

      case RolePolicyScope.Read:
        return '조회';

      case RolePolicyScope.Write:
        return '생성';

      case RolePolicyScope.Update:
        return '수정';

      case RolePolicyScope.Delete:
        return '삭제';

      case RolePolicyScope.Entire:
        return '전체';

      case RolePolicyScope.Admin:
        return '관리자';

      case RolePolicyScope.Developer:
        return '개발자';
    }
  }

  static getProjectScopeText(value: ProjectScope) {
    switch (value) {
      case ProjectScope.Public:
        return '전체';

      case ProjectScope.Team:
        return '팀';
    }
  }

  static getProjectStatusText(value: ProjectStatus) {
    switch (value) {
      case ProjectStatus.Wating:
        return '수주';

      case ProjectStatus.Active:
        return '진행';

      case ProjectStatus.Pause:
        return '중단';

      case ProjectStatus.Cancel:
        return '취소';

      case ProjectStatus.Finish:
        return '종료';

      case ProjectStatus.AfterService:
        return 'A/S';
    }
  }
}
