import { GRID_STRING_COL_DEF } from './gridStringColDef';
import { GridColTypeDef } from './gridColDef';
import { renderBooleanCell } from '../../components/cell/GridBooleanCell';
import { renderEditBooleanCell } from '../../components/cell/GridEditBooleanCell';
import { gridNumberComparator } from '../../hooks/features/sorting/gridSortingUtils';
import { getGridBooleanOperators } from './gridBooleanOperators';
import { GridValueFormatterParams } from '../params/gridCellParams';

function gridBooleanFormatter({ value, api }: GridValueFormatterParams) {
  return value
    ? api.getLocaleText('booleanCellTrueLabel')
    : api.getLocaleText('booleanCellFalseLabel');
}

export const GRID_BOOLEAN_COL_DEF: GridColTypeDef = {
  ...GRID_STRING_COL_DEF,
  type: 'boolean',
  align: 'center',
  headerAlign: 'center',
  renderCell: renderBooleanCell,
  renderEditCell: renderEditBooleanCell,
  sortComparator: gridNumberComparator,
  valueFormatter: gridBooleanFormatter,
  filterOperators: getGridBooleanOperators(),
};