export interface TableColumn {
  columnDef: string;
  header: string;
  cell: (row: any) => string;
  icon?: boolean;
  hasAvatar?: boolean;
  date?: boolean;
}
