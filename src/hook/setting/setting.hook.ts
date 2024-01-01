import { useCallback, useEffect, useState } from 'react';
import { SetterOrUpdater } from 'recoil';

import { SettingRow, SettingUpdateBody, SnackEvent, settingHttpService } from '@service';
import { settingStore } from '@store';

export class SettingHook {
  useGetRowCallback() {
    const setSetting = settingStore.useSetState();

    return useCallback(async () => {
      const res = await settingHttpService.getRow();

      if (res.ok) {
        setSetting((prev) => ({ ...prev, row: res.data }));
      }
    }, [setSetting]);
  }

  useMount() {
    const getRow = this.useGetRowCallback();

    useEffect(() => {
      getRow();
    }, [getRow]);
  }

  useUnMount() {
    const resetSetting = settingStore.useResetState();

    useEffect(() => {
      return () => {
        resetSetting();
      };
    }, [resetSetting]);
  }

  useDialogCallback(open: boolean) {
    const setSetting = settingStore.useSetState();

    return useCallback(() => {
      setSetting((prev) => ({ ...prev, dialog: { ...prev.dialog, update: { open } } }));
    }, [open, setSetting]);
  }

  useUpdateState(row: SettingRow): [SettingUpdateBody, SetterOrUpdater<SettingUpdateBody>] {
    const [body, setBody] = useState<SettingUpdateBody>({ difficultyTooltip: '' });

    useEffect(() => {
      setBody({
        difficultyTooltip: row.difficultyTooltip,
      });
    }, [row, setBody]);

    return [body, setBody];
  }

  useUpdateCallback(body: SettingUpdateBody) {
    const setSetting = settingStore.useSetState();

    return useCallback(async () => {
      const res = await settingHttpService.updateRow(body);

      if (res.ok === false) {
        return false;
      }

      SnackEvent.dispatchBySuccess('저장되었습니다.');

      setSetting((prev) => ({
        ...prev,
        row: { ...prev.row, difficultyTooltip: body.difficultyTooltip },
      }));

      return true;
    }, [body, setSetting]);
  }
}

export const settingHook = new SettingHook();
