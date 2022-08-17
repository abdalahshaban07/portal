export interface TableColumn {
  columnDef: string;
  header: string;
  cell: (row: any) => string | any;
  type?: typeColumn;
}

export enum typeColumn {
  icon = 'icon',
  file = 'file',
  fileArray = 'fileArray',
  avatar = 'avatar',
  date = 'date',
}
