import { FunctionComponent } from 'react';

import { DialogBoxy } from '@component';
import { dialogStore } from '@store';
import { businessCategoryHook, dialogHook } from '@hook';

import { BusinessCategoryPageCreateDialogContent } from './business-category-page-create-dialog-content';
import { BusinessCategoryPageCreateDialogAction } from './business-category-page-create-dialog-action';

export const BusinessCategoryPageCreateDialog: FunctionComponent = () => {
  const dialog = dialogStore.useValue();
  const onClose = dialogHook.useBusinessCategoryPageCreateDialogCallback(false);

  const [body, setBody] = businessCategoryHook.useCreateState();

  return (
    <DialogBoxy
      title="사업구분 등록"
      open={dialog.businessCategory.create.open}
      onClose={onClose}
      contents={<BusinessCategoryPageCreateDialogContent {...{ body, setBody }} />}
      actions={<BusinessCategoryPageCreateDialogAction {...{ body, onClose }} />}
    />
  );
};
