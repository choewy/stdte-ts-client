import { v4 } from 'uuid';

export const createKey = (prefix: string): string => [prefix, v4()].join('_');
