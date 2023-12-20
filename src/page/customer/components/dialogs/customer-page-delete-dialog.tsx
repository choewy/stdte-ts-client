import { FunctionComponent } from 'react';

import { DialogBoxy } from '@component';
import { dialogStore } from '@store';
import { dialogHook } from '@hook';

import { CustomerPageDeleteDialogContent } from './customer-page-delete-dialog-content';
import { CustomerPageDeleteDialogAction } from './customer-page-delete-dialog-action';

export const CustomerPageDeleteDialog: FunctionComponent = () => {
  const dialog = dialogStore.useValue();
  const row = dialog.customer.delete.row;

  const onClose = dialogHook.useCustomerDialogCallback('delete', false, row);

  return (
    <DialogBoxy
      title="고객사 정보를 삭제하시겠습니까?"
      open={dialog.customer.delete.open}
      onClose={onClose}
      contents={<CustomerPageDeleteDialogContent />}
      actions={<CustomerPageDeleteDialogAction {...{ row, onClose }} />}
    />
  );
};
