import { Roles } from '@shared/Enums/roles';
export interface CardCount {
  title: string;
  count: number;
  img: string;
  icon: string;
  iconRouter?: string;
  role: Roles[];
}
