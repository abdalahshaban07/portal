export interface TableColumn {
  columnDef: string;
  header: string;
  cell: (row: any) => string | any;
  type?: typeColumn;
  flex?: number;
}

export enum typeColumn {
  icon = 'icon',
  file = 'file',
  fileArray = 'fileArray',
  avatar = 'avatar',
  date = 'date',
}
