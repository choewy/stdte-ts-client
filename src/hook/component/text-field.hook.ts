import { ChangeEvent, useCallback } from 'react';
import { SetterOrUpdater } from 'recoil';

import { regExpService } from '@service';

export class TextFieldHook {
  useOnChangeObjectStrProperty<D extends object>(setState: SetterOrUpdater<D>, key: keyof D) {
    return useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        setState((prev) => ({ ...prev, [key]: e.target.value }));
      },
      [key, setState],
    );
  }

  useOnChangeObjectScienceNumberProperty<D extends object>(setState: SetterOrUpdater<D>, key: keyof D) {
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

  useOnChangeObjectPhoneNumberProperty<D extends object>(setState: SetterOrUpdater<D>, key: keyof D) {
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

  useOnChangeObjectDecimalProperty<D extends object>(
    setState: SetterOrUpdater<D>,
    key: keyof D,
    precision = 2,
    scale = 1,
  ) {
    return useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.trim();

        value = value === '' ? '0' : value;

        const split = value.split('.');

        if (split.length > 2) {
          return;
        }

        if (typeof split[0] === 'string') {
          if (Number.isNaN(Number(split[0]))) {
            return;
          }

          if (split[0].length > precision) {
            return;
          }
        }

        if (typeof split[1] === 'string') {
          if (Number.isNaN(Number(split[1]))) {
            return;
          }

          if (split[1].length > scale) {
            return;
          }
        }

        setState((prev) => ({
          ...prev,
          [key]: split.map((v) => (v === '' ? v : Number(v))).join('.'),
        }));
      },
      [setState, key, precision, scale],
    );
  }

  useOnChangeObjectKRWProperty<D extends object>(setState: SetterOrUpdater<D>, key: keyof D) {
    return useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value.replaceAll(',', ''));

        if (Number.isNaN(value)) {
          return;
        }

        setState((prev) => ({
          ...prev,
          [key]: value.toLocaleString(),
        }));
      },
      [setState, key],
    );
  }
}

export const textFieldHook = new TextFieldHook();
