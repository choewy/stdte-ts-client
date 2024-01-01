import { SettingRow } from '@service';

export type SettingStoreProps = {
  row: SettingRow;
  dialog: {
    update: { open: boolean };
  };
};
