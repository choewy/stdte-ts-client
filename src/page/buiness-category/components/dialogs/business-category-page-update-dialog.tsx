import { FunctionComponent } from 'react';

import { DialogBoxy } from '@component';
import { dialogStore } from '@store';
import { businessCategoryHook, dialogHook } from '@hook';

import { BusinessCategoryPageUpdateDialogContent } from './business-category-page-update-dialog-content';
import { BusinessCategoryPageUpdateDialogAction } from './business-category-page-update-dialog-action';

export const BusinessCategoryPageUpdateDialog: FunctionComponent = () => {
  const dialog = dialogStore.useValue();
  const row = dialog.businessCategory.update.row;
  const onClose = dialogHook.useBusinessCategoryPageDialogCallback('update', row, false);

  const [body, setBody] = businessCategoryHook.useUpdateState(row);

  return (
    <DialogBoxy
      title="사업구분 수정"
      open={dialog.businessCategory.update.open}
      onClose={onClose}
      contents={<BusinessCategoryPageUpdateDialogContent {...{ body, setBody }} />}
      actions={<BusinessCategoryPageUpdateDialogAction {...{ row, body, onClose }} />}
    />
  );
};
