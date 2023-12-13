export class RegExpService {
  PHONE = /^01([0-1]|[6-9]){1}-[0-9]{4}-[0-9]{4}$/;
  SCIENCE_NUMBER = /^[0-9]{8}$/;

  PHONE_PARTIAL = /^01[0-9]{0,1}(-[0-9]{0,4})?(-[0-9]{0,4})?$/;
  SCIENCE_NUMBER_PARTIAL = /^[0-9]{0,8}$/;
}

export const regExpService = new RegExpService();
