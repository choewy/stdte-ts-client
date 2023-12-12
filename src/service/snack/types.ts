import { VariantType } from 'notistack';

export type SnackEventDetail = {
  id: string;
  variant: VariantType;
  message: string;
};
