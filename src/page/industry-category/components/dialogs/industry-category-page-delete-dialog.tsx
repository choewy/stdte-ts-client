import { FunctionComponent } from 'react';

import { DialogBoxy } from '@component';
import { dialogHook } from '@hook';
import { dialogStore } from '@store';

import { IndustryCategoryPageDeleteDialogContent } from './industry-category-page-delete-dialog-content';
import { IndustryCategoryPageDeleteDialogAction } from './industry-category-page-delete-dialog-action';

export const IndustryCategoryPageDeleteDialog: FunctionComponent = () => {
  const dialog = dialogStore.useValue();
  const row = dialog.industryCategory.delete.row;

  const onClose = dialogHook.useIndustryCategoryDialogCallback('delete', false, row);

  return (
    <DialogBoxy
      title="산업분야를 삭제하시겠습니까?"
      open={dialog.industryCategory.delete.open}
      onClose={onClose}
      contents={<IndustryCategoryPageDeleteDialogContent />}
      actions={<IndustryCategoryPageDeleteDialogAction {...{ row, onClose }} />}
    />
  );
};
