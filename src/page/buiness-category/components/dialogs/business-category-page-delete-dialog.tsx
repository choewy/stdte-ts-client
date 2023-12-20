import { FunctionComponent } from 'react';

import { DialogBoxy } from '@component';
import { dialogHook } from '@hook';
import { dialogStore } from '@store';

import { BusinessCategoryPageDeleteDialogContent } from './business-category-page-delete-dialog-content';
import { BusinessCategoryPageDeleteDialogAction } from './business-category-page-delete-dialog-action';

export const BusinessCategoryPageDeleteDialog: FunctionComponent = () => {
  const dialog = dialogStore.useValue();
  const row = dialog.businessCategory.delete.row;

  const onClose = dialogHook.useBusinessCategoryDialogCallback('delete', false, row);

  return (
    <DialogBoxy
      title="사업구분을 삭제하시겠습니까?"
      open={dialog.businessCategory.delete.open}
      onClose={onClose}
      contents={<BusinessCategoryPageDeleteDialogContent />}
      actions={<BusinessCategoryPageDeleteDialogAction {...{ row, onClose }} />}
    />
  );
};
