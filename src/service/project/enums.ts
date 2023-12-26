export enum ProjectErrorMessage {
  EmptyName = '사업명을 입력하세요.',
  EmptyDifficulty = '난이도를 입력하세요.',
  InvalidDifficulty = '난이도를 확인하세요.',
  EmptyBusinessCategory = '사업구분을 선택하세요.',
  EmptyIndustryCategory = '산업분야를 선택하세요.',
  EmptyTaskCategory = '수행업무구분을 선택하세요.',
  AlreadyExist = '이미 존재하는 약어입니다.',
  NotFound = '사업 정보를 찾을 수 없습니다.',
}

export enum ProjectRecordType {
  Order = 'order',
  Sale = 'sale',
}

export enum ProjectRecordErrorMessage {
  NotFoundProject = '사업 정보를 찾을 수 없습니다.',
  NotFoundOrder = '수주 기록을 찾을 수 없습니다.',
  NotFoundSale = '매출 기록을 찾을 수 없습니다.',
}
