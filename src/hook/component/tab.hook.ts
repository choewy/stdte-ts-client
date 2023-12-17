import { v4 } from 'uuid';

import { TabProps } from '@mui/material';

import { CREDENTIALS_STATUS_VALUES } from '@common';
import { CredentialsStatsRow, enumService } from '@service';

export class TabHook {
  private readonly key = v4();

  useCredentialsTabProps(rows: CredentialsStatsRow[]) {
    const props: TabProps[] = [];

    for (const status of CREDENTIALS_STATUS_VALUES) {
      const text = enumService.credentialsStatusToText(status);
      const count = rows.find((row) => row.status === status)?.count;

      props.push({
        key: [this.key, status].join('-'),
        value: status,
        label: `${text}(${count})`,
      });
    }

    return props;
  }
}

export const tabHook = new TabHook();
