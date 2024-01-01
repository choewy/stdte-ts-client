import { FunctionComponent } from 'react';

import { DialogBoxy } from '@component';
import { settingHook } from '@hook';
import { settingStore } from '@store';

import { SettingDialogContent } from './setting-dialog-content';
import { SettingDialogAction } from './setting-dialog-action';

export const SettingDialog: FunctionComponent = () => {
  const setting = settingStore.useValue();
  const onClose = settingHook.useDialogCallback(false);

  const [body, setBody] = settingHook.useUpdateState(setting.row);

  return (
    <DialogBoxy
      title="사업 난이도 툴팁"
      open={setting.dialog.update.open}
      onClose={onClose}
      contents={<SettingDialogContent body={body} setBody={setBody} />}
      actions={<SettingDialogAction row={setting.row} body={body} onClose={onClose} />}
    />
  );
};
