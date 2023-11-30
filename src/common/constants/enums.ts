export const enum QueryOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export const enum LuxonFormat {
  DateTime = 'yyyy-MM-dd HH:mm:ss',
}

export const enum TimeoutKey {
  SignOut = 'signout',
}

export const enum EventType {
  Noti = 'noti-event',
}

export const enum PagePath {
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

export const enum SideMenuType {
  Global = 'global',
  Public = 'public',
  Private = 'private',
}

export const enum Degree {
  Null = 'null',
  HighSchool = 'high-school',
  Bachelor2Years = 'bachelor-2-years',
  Bachelor4Years = 'bachelor-4-years',
  Master = 'master',
  Doctor = 'doctor',
}

export const enum AuthStatus {
  Wating = 'wating',
  Reject = 'reject',
  Active = 'active',
  Disable = 'disable',
}

export const enum EmploymentStatus {
  Wating = 'wating',
  Active = 'active',
  Vacate = 'vacate',
  Retire = 'retire',
}

export const enum ProjectScope {
  Public = 'public',
  Team = 'team',
}

export const enum ProjectScopeText {
  Public = '전체',
  Team = '팀',
}

export const enum ProjectStatus {
  Wating = 'wating',
  Active = 'active',
  Pause = 'pause',
  Cancel = 'cancel',
  Finish = 'finish',
  AfterService = 'a/s',
}

export const enum RolePolicyScope {
  Limit = 1,
  Read = 2,
  Write = 3,
  Update = 4,
  Delete = 5,
  Entire = 6,
  Admin = 7,
  Developer = 8,
}

export const enum RolePolicyScopeText {
  Limit = '제한',
  Read = '조회',
  Write = '생성',
  Update = '수정',
  Delete = '삭제',
  Entire = '전체',
  Admin = '관리자',
  Developer = '개발자',
}
