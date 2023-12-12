export enum HttpException {
  InternalServerException = 'InternalServerException',
  InvalidCredentialsException = 'InvalidCredentialsException',
  IncorrectPasswordException = 'IncorrectPasswordException',
  CannotAccessException = 'CannotAccessException',
  ValidationException = 'ValidationException',
  AlreadyExistUserEmailException = 'AlreadyExistUserEmailException',
  AlreadyExistRoleException = 'AlreadyExistRoleException',
  AlreadyExistBusinessCategoryException = 'AlreadyExistBusinessCategoryException',
  AlreadyExistIndustryCategoryException = 'AlreadyExistIndustryCategoryException',
  AlreadyExistTaskMainCategoryException = 'AlreadyExistTaskMainCategoryException',
  AlreadyExistProjectCodeException = 'AlreadyExistProjectCodeException',
  OverTimeRecordSumException = 'OverTimeRecordSumException',
  NotFoundUserException = 'NotFoundUserException',
  NotFoundRoleException = 'NotFoundRoleException',
  NotFoundBusinessCategoryException = 'NotFoundBusinessCategoryException',
  NotFoundIndustryCategoryException = 'NotFoundIndustryCategoryException',
  NotFoundTaskMainCategoryException = 'NotFoundTaskMainCategoryException',
  NotFoundTaskSubCategoryException = 'NotFoundTaskSubCategoryException',
  NotFoundCustomerException = 'NotFoundCustomerException',
  NotFoundProjectException = 'NotFoundProjectException',
  NotFoundTimeRecordException = 'NotFoundTimeRecordException',
  NotFoundTimeMemoException = 'NotFoundTimeMemoException',
  CannotUpdateTimeRecordException = 'CannotUpdateTimeRecordException',
  CannotDeleteTimeRecordException = 'CannotDeleteTimeRecordException',
  CannotUpdateTimeMemoException = 'CannotUpdateTimeMemoException',
  CannotDeleteTimeMemoException = 'CannotDeleteTimeMemoException',
}