import type { PageControlsProps } from '../types/DataGrid.types';
import { Button } from '../../ui/Button';
import {
  BTN_PREV,
  BTN_NEXT,
  PAGE_BUTTON_VARIANT,
  PAGE_BUTTON_SIZE,
  FIRST_PAGE_INDEX,
} from '../constants/DataGridPagination.constants';
import {
  ARIA_PREV_PAGE,
  ARIA_NEXT_PAGE,
  PAGINATION_PAGE_PREFIX,
} from '../strings/DataGridPagination.strings';
import {
  pageControlsClass,
  pageLabelClass,
  pageCurrentClass,
} from '../styles/DataGridPagination.styles';

export const PageControls = ({
  currentPage,
  totalPages,
  onPageChange,
}: PageControlsProps) => {
  const isFirstPage = currentPage === FIRST_PAGE_INDEX;
  const isLastPage = currentPage >= totalPages - 1;

  return (
    <div className={pageControlsClass}>
      <span className={pageLabelClass}>
        {PAGINATION_PAGE_PREFIX}{' '}
        <span className={pageCurrentClass}>{currentPage + 1}</span>
        {' '}/ {totalPages}
      </span>
      <Button
        variant={PAGE_BUTTON_VARIANT}
        size={PAGE_BUTTON_SIZE}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={isFirstPage}
        aria-label={ARIA_PREV_PAGE}
      >
        {BTN_PREV}
      </Button>
      <Button
        variant={PAGE_BUTTON_VARIANT}
        size={PAGE_BUTTON_SIZE}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={isLastPage}
        aria-label={ARIA_NEXT_PAGE}
      >
        {BTN_NEXT}
      </Button>
    </div>
  );
};
