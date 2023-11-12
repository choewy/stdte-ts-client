export enum TimeoutKey {
  SignOut = 'signout',
}

export enum EventType {
  Noti = 'noti-event',
}

export enum PagePath {
  Home = '/',
  Forbidden = '/forbidden',
  SignIn = '/signin',
  SignUp = '/signup',
  SignOut = '/signout',
  MyPage = '/mypage',
  Role = '/role',
  Credential = '/credential',
  TimeRecordTable = '/table',
  TimeRecordAnalytics = '/analytics',
  Team = '/team',
  Member = '/member',
  ProjectTable = '/project',
  ProjectSetting = '/setting',
}

export enum SideMenuType {
  Global = 'global',
  Public = 'public',
  Private = 'private',
}

export enum GenderCode {
  Male1 = 1,
  Male2 = 3,
  Female1 = 2,
  Female2 = 4,
}

export enum DegreeValue {
  Null = 0,
  HighSchool = 1,
  Bachelor2Years = 2,
  Bachelor4Years = 3,
  Master = 4,
  Doctor = 5,
}

export enum DegreeText {
  Null = '없음',
  HighSchool = '고졸',
  Bachelor2Years = '전문학사',
  Bachelor4Years = '일반학사',
  Master = '석사',
  Doctor = '박사',
}

export enum AuthStatusValue {
  Wating = 0,
  Reject = 1,
  Active = 2,
  Disable = 3,
}

export enum AuthStatusText {
  Wating = '승인대기',
  Reject = '승인거절',
  Active = '활성',
  Disable = '비활성',
}

export enum EmploymentStatusValue {
  Wating = 0,
  Active = 1,
  Vacate = 2,
  Retire = 3,
}

export enum EmploymentStatusText {
  Wating = '확인필요',
  Active = '재직',
  Vacate = '휴직',
  Retire = '퇴직',
}

export enum ProjectScopeValue {
  Public = 0,
  Team = 1,
}

export enum ProjectScopeText {
  Public = '전체',
  Team = '팀',
}

export enum ProjectStatusValue {
  Wating = 0,
  Active = 1,
  Pause = 2,
  Cancel = 3,
  Finish = 4,
  AfterService = 5,
}

export enum ProjectStatusText {
  Wating = '수주',
  Active = '진행',
  Pause = '중단',
  Cancel = '취소',
  Finish = '종료',
  AfterService = 'A/S',
}

export enum RolePolicyValue {
  Limit = 0,
  Read = 1,
  Write = 2,
  Update = 3,
  Delete = 4,
  All = 5,
  Admin = 9,
}

export enum RolePolicyText {
  Limit = '제한',
  Read = '조회',
  Write = '생성',
  Update = '수정',
  Delete = '삭제',
  All = '전체',
  Admin = '관리자',
}
