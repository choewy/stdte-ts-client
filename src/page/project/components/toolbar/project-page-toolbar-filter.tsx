import { FunctionComponent, useCallback } from 'react';

import { MenuItem, SelectChangeEvent } from '@mui/material';

import { SelectControl } from '@component';
import { enumService } from '@service';
import { selectHook } from '@hook';
import { projectStore } from '@store';
import { ProjectStatus } from '@common';

export const ProjectPageToolbarFilter: FunctionComponent = () => {
  const [{ query }, setProject] = projectStore.useState();

  const menuItemProps = enumService.projectStatusSelectMenuItemProps();
  const industryCategories = selectHook.useCategoryList('industries');
  const businessCategories = selectHook.useCategoryList('businesses');
  const customers = selectHook.useCustomerList();

  const onChangeIndustryCategory = useCallback(
    (e: SelectChangeEvent<unknown>) => {
      const industryCategory = e.target.value === 'all' ? undefined : (e.target.value as number);

      setProject((prev) => ({ ...prev, query: { ...prev.query, industryCategory, skip: 0 } }));
    },
    [setProject],
  );

  const onChangeBusinessCategory = useCallback(
    (e: SelectChangeEvent<unknown>) => {
      const businessCategory = e.target.value === 'all' ? undefined : (e.target.value as number);

      setProject((prev) => ({ ...prev, query: { ...prev.query, businessCategory, skip: 0 } }));
    },
    [setProject],
  );

  const onChangeCanExpose = useCallback(
    (e: SelectChangeEvent<unknown>) => {
      const canExpose = e.target.value === -1 ? undefined : (e.target.value as number) > 0;

      setProject((prev) => ({ ...prev, query: { ...prev.query, canExpose, skip: 0 } }));
    },
    [setProject],
  );

  const onChangeCustomer = useCallback(
    (e: SelectChangeEvent<unknown>) => {
      const customer = e.target.value === 'all' ? undefined : (e.target.value as number);

      setProject((prev) => ({ ...prev, query: { ...prev.query, customer, skip: 0 } }));
    },
    [setProject],
  );

  const onChangeStatus = useCallback(
    (e: SelectChangeEvent<unknown>) => {
      const status = e.target.value === 'all' ? undefined : (e.target.value as ProjectStatus);

      setProject((prev) => ({ ...prev, query: { ...prev.query, status, skip: 0 } }));
    },
    [setProject],
  );

  return (
    <>
      <SelectControl
        label="산업분야"
        size="small"
        sx={{ margin: 0, height: 40 }}
        value={query.industryCategory ?? 'all'}
        onChange={onChangeIndustryCategory}
      >
        <MenuItem value="all">전체</MenuItem>
        {industryCategories.map((item, i) => (
          <MenuItem key={['project-industry-query-menu-item', item.id, i].join('-')} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </SelectControl>
      <SelectControl
        label="사업구분"
        size="small"
        sx={{ margin: 0, height: 40 }}
        value={query.businessCategory ?? 'all'}
        onChange={onChangeBusinessCategory}
      >
        <MenuItem value="all">전체</MenuItem>
        {businessCategories.map((item, i) => (
          <MenuItem key={['project-business-query-menu-item', item.id, i].join('-')} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </SelectControl>
      <SelectControl
        label="고객사"
        size="small"
        sx={{ margin: 0, height: 40 }}
        value={query.customer ?? 'all'}
        onChange={onChangeCustomer}
      >
        <MenuItem value="all">전체</MenuItem>
        {customers.map((item, i) => (
          <MenuItem key={['project-customer-query-menu-item', item.id, i].join('-')} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </SelectControl>
      <SelectControl
        label="상태"
        size="small"
        sx={{ margin: 0, height: 40 }}
        value={query.status ?? 'all'}
        onChange={onChangeStatus}
      >
        <MenuItem value="all">전체</MenuItem>
        {menuItemProps.map((props, i) => (
          <MenuItem key={['project-status-query-menu-item', props.value, i].join('-')} {...props} />
        ))}
      </SelectControl>
      <SelectControl
        label="시간관리 상태"
        size="small"
        sx={{ margin: 0, height: 40 }}
        value={typeof query.canExpose === 'boolean' ? Number(query.canExpose) : -1}
        onChange={onChangeCanExpose}
      >
        <MenuItem value={-1}>전체</MenuItem>
        {[
          { name: '노출', value: 1 },
          { name: '숨김', value: 0 },
        ].map((item, i) => (
          <MenuItem key={['project-task-query-menu-item', item.value, i].join('-')} value={item.value}>
            {item.name}
          </MenuItem>
        ))}
      </SelectControl>
    </>
  );
};
