export interface TableColumn {
  columnDef: string;
  header: string;
  cell: (row: any) => string;
  // icon?: boolean;
  // hasAvatar?: boolean;
  // date?: boolean;
  // file?: boolean;
  type?: typeColumn;
}

export enum typeColumn {
  icon = 'icon',
  file = 'file',
  avatar = 'avatar',
  date = 'date',
}
