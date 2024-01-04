export enum Degree {
  HighSchool = 1,
  Bachelor2Years = 2,
  Bachelor4Years = 3,
  Master = 4,
  Doctor = 5,
}

export enum CredentialsStatus {
  Wating = 0,
  Reject = 1,
  Active = 2,
  Disable = 3,
}

export enum UserStatus {
  Reference = 0,
  Active = 1,
  Vacate = 2,
  Retire = 3,
}

export enum RolePolicyLevel {
  Limit = 0,
  Read = 1,
  Create = 2,
  Update = 3,
  Delete = 4,
  Admin = 99,
  Developer = 100,
}

export enum ProjectStatus {
  Wating = 0,
  Active = 1,
  Complete = 3,
  AfterService = 4,
  Stop = 5,
  LeavingOut = 6,
}
