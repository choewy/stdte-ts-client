import { UserUpdateBody } from '@service';

export type ProfilePersonalState = Pick<
  UserUpdateBody,
  'name' | 'birthday' | 'phone' | 'scienceNumber' | 'enteringDay' | 'resignationDay'
>;

export type ProfileEducationalState = Pick<UserUpdateBody, 'degree' | 'school' | 'major'>;
export type ProfileBehcleState = Pick<UserUpdateBody, 'carType' | 'carNumber'>;
