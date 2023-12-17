import { FunctionComponent } from 'react';

import { DialogBoxy } from '@component';
import { dialogStore } from '@store';
import { customerHook, dialogHook } from '@hook';

import { CustomerPageUpdateDialogContent } from './customer-page-update-dialog-content';
import { CustomerPageUpdateDialogAction } from './customer-page-update-dialog-action';

export const CustomerPageUpdateDialog: FunctionComponent = () => {
  const dialog = dialogStore.useValue();
  const row = dialog.customer.update.row;
  const onClose = dialogHook.useCustomerPageDialogCallback('update', row, false);

  const [body, setBody] = customerHook.useUpdateState(row);

  return (
    <DialogBoxy
      title="고객사 수정"
      open={dialog.customer.update.open}
      onClose={onClose}
      contents={<CustomerPageUpdateDialogContent {...{ body, setBody }} />}
      actions={<CustomerPageUpdateDialogAction {...{ row, body, onClose }} />}
    />
  );
};
