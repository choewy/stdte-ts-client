import { FunctionComponent } from 'react';

import { DialogBoxy } from '@component';
import { dialogStore } from '@store';
import { industryCategoryHook, dialogHook } from '@hook';

import { IndustryCategoryPageCreateDialogContent } from './industry-category-page-create-dialog-content';
import { IndustryCategoryPageCreateDialogAction } from './industry-category-page-create-dialog-action';

export const IndustryCategoryPageCreateDialog: FunctionComponent = () => {
  const dialog = dialogStore.useValue();
  const onClose = dialogHook.useIndustryCategoryDialogCallback('create', false);

  const [body, setBody] = industryCategoryHook.useCreateState();

  return (
    <DialogBoxy
      title="산업분야 등록"
      open={dialog.industryCategory.create.open}
      onClose={onClose}
      contents={<IndustryCategoryPageCreateDialogContent {...{ body, setBody }} />}
      actions={<IndustryCategoryPageCreateDialogAction {...{ body, onClose }} />}
    />
  );
};
