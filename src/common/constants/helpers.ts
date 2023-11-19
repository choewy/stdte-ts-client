import { v4 } from 'uuid';
import { EnumType } from './types';

export const createKey = (prefix: string): string => [prefix, v4()].join('_');

export const toEnumText = (origin: EnumType, other: EnumType, value: number | string) => {
  const valueEntires = Object.entries(origin).find(([k, v]) => {
    return v === value;
  });

  if (valueEntires == null) {
    return null;
  }

  const otherEntires = Object.entries(other);

  for (const [k, v] of otherEntires) {
    if (k === valueEntires[0]) {
      return v;
    }
  }

  return null;
};
