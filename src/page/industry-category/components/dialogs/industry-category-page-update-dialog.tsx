import { FunctionComponent } from 'react';

import { DialogBoxy } from '@component';
import { dialogStore } from '@store';
import { businessCategoryHook, dialogHook } from '@hook';

import { IndustryCategoryPageUpdateDialogContent } from './industry-category-page-update-dialog-content';
import { IndustryCategoryPageUpdateDialogAction } from './industry-category-page-update-dialog-action';

export const IndustryCategoryPageUpdateDialog: FunctionComponent = () => {
  const dialog = dialogStore.useValue();
  const row = dialog.industryCategory.update.row;
  const onClose = dialogHook.useIndustryCategoryDialogCallback('update', false, row);

  const [body, setBody] = businessCategoryHook.useUpdateState(row);

  return (
    <DialogBoxy
      title="산업분야 수정"
      open={dialog.industryCategory.update.open}
      onClose={onClose}
      contents={<IndustryCategoryPageUpdateDialogContent {...{ body, setBody }} />}
      actions={<IndustryCategoryPageUpdateDialogAction {...{ row, body, onClose }} />}
    />
  );
};
