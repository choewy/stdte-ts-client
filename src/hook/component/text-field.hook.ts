import { regExpService } from '@service';
import { ChangeEvent, useCallback } from 'react';
import { SetterOrUpdater } from 'recoil';

export class TextFieldHook {
  useOnChangeObjectStrProperty<D extends object>(key: keyof D, setState: SetterOrUpdater<D>) {
    return useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        setState((prev) => ({ ...prev, [key]: e.target.value }));
      },
      [key, setState],
    );
  }

  useOnChangeObjectScienceNumberProperty<D extends object>(key: keyof D, setState: SetterOrUpdater<D>) {
    return useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        if (regExpService.SCIENCE_NUMBER_PARTIAL.test(value) === false) {
          return;
        }

        setState((prev) => ({ ...prev, [key]: value }));
      },
      [key, setState],
    );
  }

  useOnChangeObjectPhoneNumberProperty<D extends object>(key: keyof D, setState: SetterOrUpdater<D>) {
    return useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        if (value.length > 0) {
          if (regExpService.PHONE_PARTIAL.test(value) === false) {
            return;
          }
        }

        setState((prev) => ({ ...prev, [key]: value }));
      },
      [key, setState],
    );
  }
}

export const textFieldHook = new TextFieldHook();
