import { FunctionComponent, useCallback } from 'react';

import { Box, Button, ButtonGroup, MenuItem, SelectChangeEvent } from '@mui/material';

import { ProjectStatus } from '@common';
import { SelectControl } from '@component';
import { enumService } from '@service';
import { projectStore } from '@store';
import { dialogHook, projectHook, selectHook } from '@hook';

export const ProjectPageToolbar: FunctionComponent<{
  canCreate: boolean;
}> = ({ canCreate }) => {
  const menuItemProps = enumService.projectStatusSelectMenuItemProps();
  const industryCategories = selectHook.useCategoryList('industries');
  const businessCategories = selectHook.useCategoryList('businesses');
  const customers = selectHook.useCustomerList();
  const taskCategories = selectHook.useCategoryList('tasks');

  const [{ query }, setProject] = projectStore.useState();

  const onChangeIndustryCategory = useCallback(
    (e: SelectChangeEvent<unknown>) => {
      const industryCategory = e.target.value === 'all' ? undefined : (e.target.value as number);

      setProject((prev) => ({ ...prev, query: { ...prev.query, industryCategory } }));
    },
    [setProject],
  );

  const onChangeBusinessCategory = useCallback(
    (e: SelectChangeEvent<unknown>) => {
      const businessCategory = e.target.value === 'all' ? undefined : (e.target.value as number);

      setProject((prev) => ({ ...prev, query: { ...prev.query, businessCategory } }));
    },
    [setProject],
  );

  const onChangeTaskMainCategory = useCallback(
    (e: SelectChangeEvent<unknown>) => {
      const taskMainCategory = e.target.value === 'all' ? undefined : (e.target.value as number);

      setProject((prev) => ({ ...prev, query: { ...prev.query, taskMainCategory } }));
    },
    [setProject],
  );

  const onChangeCustomer = useCallback(
    (e: SelectChangeEvent<unknown>) => {
      const customer = e.target.value === 'all' ? undefined : (e.target.value as number);

      setProject((prev) => ({ ...prev, query: { ...prev.query, customer } }));
    },
    [setProject],
  );

  const onChangeStatus = useCallback(
    (e: SelectChangeEvent<unknown>) => {
      const status = e.target.value === 'all' ? undefined : (e.target.value as ProjectStatus);

      setProject((prev) => ({ ...prev, query: { ...prev.query, status } }));
    },
    [setProject],
  );

  const onClickCreate = dialogHook.useProjectDialogCallback('create', true);
  const onClickDownload = projectHook.useDownloadCallback();

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        height: 45,
        mb: 1,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', margin: 0, gap: 1, flex: 2 }}>
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
          label="수행업무구분"
          size="small"
          sx={{ margin: 0, height: 40 }}
          value={query.taskMainCategory ?? 'all'}
          onChange={onChangeTaskMainCategory}
        >
          <MenuItem value="all">전체</MenuItem>
          {taskCategories.map((item, i) => (
            <MenuItem key={['project-task-query-menu-item', item.id, i].join('-')} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </SelectControl>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', flex: 1 }}>
        <ButtonGroup variant="outlined">
          {canCreate && <Button {...{ children: '등록', size: 'small', onClick: onClickCreate }} />}
          <Button {...{ children: '다운로드', size: 'small', onClick: onClickDownload }} />
        </ButtonGroup>
      </Box>
    </Box>
  );
};
