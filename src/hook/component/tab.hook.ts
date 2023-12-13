import { v4 } from 'uuid';

import { TabProps } from '@mui/material';

import { CREDENTIALS_STATUS_VALUES } from '@common';
import { CredentialsAdminStatsResposne, enumService } from '@service';

export class TabHook {
  private readonly key = v4();

  useCredentialsTabProps(stats: CredentialsAdminStatsResposne[]) {
    const props: TabProps[] = [];

    for (const status of CREDENTIALS_STATUS_VALUES) {
      const text = enumService.credentialsStatusToText(status);
      const count = stats.find((stats) => stats.status === status)?.count;

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
