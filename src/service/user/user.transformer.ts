import { UserUpdateBody } from './types';

export class UserTransformer {
  updateRow(body: Partial<UserUpdateBody>): Partial<UserUpdateBody> {
    return {
      ...body,
      degree: (body.degree === '' ? null : body.degree) as string | number,
    };
  }
}

export const userTransformer = new UserTransformer();
