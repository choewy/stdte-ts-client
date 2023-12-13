import { regExpService } from '../regexp';
import { UserUpdateBody } from './types';

export class UserValidator {
  update(body: Partial<UserUpdateBody>) {
    if (body.phone) {
      if (regExpService.PHONE.test(body.phone) === false) {
        return '연락처 형식이 올바르지 않습니다.';
      }
    }

    if (body.scienceNumber) {
      if (regExpService.SCIENCE_NUMBER.test(body.scienceNumber) === false) {
        return '과학기술인번호 형식이 올바르지 않습니다.';
      }
    }
  }
}

export const userValidator = new UserValidator();
