import { FunctionComponent } from 'react';

import { DialogBoxy } from '@component';
import { dialogStore } from '@store';
import { customerHook, dialogHook } from '@hook';

import { CustomerPageCreateDialogContent } from './customer-page-create-dialog-content';
import { CustomerPageCreateDialogAction } from './customer-page-create-dialog-action';

export const CustomerPageCreateDialog: FunctionComponent = () => {
  const dialog = dialogStore.useValue();
  const onClose = dialogHook.useCustomerDialogCallback('create', false);

  const [body, setBody] = customerHook.useCreateState();

  return (
    <DialogBoxy
      title="고객사 등록"
      open={dialog.customer.create.open}
      onClose={onClose}
      contents={<CustomerPageCreateDialogContent {...{ body, setBody }} />}
      actions={<CustomerPageCreateDialogAction {...{ body, onClose }} />}
    />
  );
};
