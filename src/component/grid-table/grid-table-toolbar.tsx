import { FunctionComponent } from 'react';

import {
  GridCsvExportMenuItem,
  GridPrintExportMenuItem,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExportContainer,
  GridToolbarFilterButton,
} from '@mui/x-data-grid';
import { Box } from '@mui/material';

import { GridTableToolbarProps } from './types';
import { GridTableStyle } from './grid-table.style';

export const GridTableToolbar: FunctionComponent<GridTableToolbarProps> = (props) => {
  return (
    <GridToolbarContainer>
      <Box sx={GridTableStyle.ToolbarMenuItemsWrapper}>
        {props.column && <GridToolbarColumnsButton sx={{ minWidth: 50 }} />}
        {props.filter && <GridToolbarFilterButton sx={{ minWidth: 50 }} />}
        {props.density && <GridToolbarDensitySelector sx={{ minWidth: 80 }} />}
        {props.exports == null ? null : (
          <GridToolbarExportContainer sx={{ minWidth: 100 }}>
            {props.exports.csv && <GridCsvExportMenuItem {...props.exports.csv} />}
            {props.exports.print && <GridPrintExportMenuItem {...props.exports.print} />}
            {props.exports.customs?.map((Custom, i) => (
              <Custom key={['grid-table-toolbar-exports-custom', i].join('-')} />
            ))}
          </GridToolbarExportContainer>
        )}
      </Box>
      <Box sx={GridTableStyle.ToolbarButtonsWrapper}>
        {props.buttons?.map((Button, i) => (
          <Button key={['grid-table-toolbar-buttons', i].join('-')} />
        ))}
      </Box>
    </GridToolbarContainer>
  );
};
