import { GridLocaleText } from '@mui/x-data-grid';

export const GRID_TABLE_PAGE_SIZE_OPTIONS: number[] = [10, 20, 30, 40, 50];

export const GRID_TABLE_LOCALE_TEXT: Partial<GridLocaleText> = {
  noRowsLabel: '데이터가 존재하지 않습니다.',
  noResultsOverlayLabel: '필터 결과를 찾을 수 없습니다.',
  toolbarColumns: '컬럼',
  toolbarFilters: '필터',
  toolbarDensity: '행 간격',
  toolbarDensityCompact: '좁게',
  toolbarDensityStandard: '보통',
  toolbarDensityComfortable: '넓게',
  toolbarExport: '내보내기',
  toolbarExportCSV: 'csv 파일',
  toolbarExportPrint: '프린트 인쇄',
  columnMenuFilter: '필터',
  columnMenuSortAsc: '오름차순',
  columnMenuSortDesc: '내림차순',
  columnMenuUnsort: '정렬 해제',
  columnsPanelTextFieldLabel: '컬럼명 검색',
  columnsPanelTextFieldPlaceholder: '컬럼명을 입력하세요.',
  columnMenuHideColumn: '컬럼 숨기기',
  columnMenuManageColumns: '컬럼 관리',
  columnsPanelHideAllButton: '전체 숨기기',
  columnsPanelShowAllButton: '전체 보이기',
  filterPanelColumns: '컬럼',
  filterPanelOperator: '조건',
  filterPanelInputLabel: '값',
  filterPanelInputPlaceholder: '조건값을 입력하세요.',
  filterOperatorContains: '포함',
  filterOperatorEquals: '동일',
  filterOperatorStartsWith: '-로 시작',
  filterOperatorEndsWith: '-로 종료',
  filterOperatorIsEmpty: '빈 값',
  filterOperatorIsNotEmpty: '값 존재',
  filterOperatorIsAnyOf: '모든 조건',
  footerRowSelected: (n) => `${n}개 행 선택`,
  MuiTablePagination: {
    labelRowsPerPage: '목록수',
    labelDisplayedRows: ({ from, to, count }) => {
      return `${from} - ${to} / ${count}`;
    },
  },
};
