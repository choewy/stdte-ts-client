export enum QueryOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export enum LuxonFormat {
  DateTime = 'yyyy-MM-dd HH:mm:ss',
}

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
  HttpRequestLog = '/http-request-log',
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
  Null = 'null',
  HighSchool = 'high-school',
  Bachelor2Years = 'bachelor-2-years',
  Bachelor4Years = 'bachelor-4-years',
  Master = 'master',
  Doctor = 'doctor',
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
  Wating = 'wating',
  Reject = 'reject',
  Active = 'active',
  Disable = 'disable',
}

export enum AuthStatusText {
  Wating = '승인대기',
  Reject = '승인거절',
  Active = '활성',
  Disable = '비활성',
}

export enum EmploymentStatusValue {
  Null = 'null',
  Active = 'active',
  Vacate = 'vacate',
  Retire = 'retire',
}

export enum EmploymentStatusText {
  Wating = '확인필요',
  Active = '재직',
  Vacate = '휴직',
  Retire = '퇴직',
}

export enum ProjectScopeValue {
  Public = 'public',
  Team = 'team',
}

export enum ProjectScopeText {
  Public = '전체',
  Team = '팀',
}

export enum ProjectStatusValue {
  Wating = 'wating',
  Active = 'active',
  Pause = 'pause',
  Cancel = 'cancel',
  Finish = 'finish',
  AfterService = 'a/s',
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
  Limit = 1,
  Read = 2,
  Write = 3,
  Update = 4,
  Delete = 5,
  Entire = 6,
  Admin = 7,
  Developer = 8,
}

export enum RolePolicyText {
  Limit = '제한',
  Read = '조회',
  Write = '생성',
  Update = '수정',
  Delete = '삭제',
  Entire = '전체',
  Admin = '관리자',
  Developer = '개발자',
}
