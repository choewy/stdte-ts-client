import { ProfileStoreProps } from '@store';

export type ProfilePersonalState = Pick<
  ProfileStoreProps,
  'name' | 'birthday' | 'gender' | 'phone' | 'scienceNumber' | 'enteringDay' | 'resignationDay'
>;

export type ProfileEducationalState = Pick<ProfileStoreProps, 'degree' | 'school' | 'major'>;
export type ProfileBehcleState = Pick<ProfileStoreProps, 'carType' | 'carNumber'>;
