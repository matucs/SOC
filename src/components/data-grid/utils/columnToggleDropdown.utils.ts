export const isColumnVisible = (
  columnVisibility: Record<string, boolean>,
  accessor: string | number | symbol,
) => columnVisibility[String(accessor)] !== false;
