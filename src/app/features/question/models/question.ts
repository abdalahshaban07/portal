export interface IQuestion {
  id: number | string;
  quesation1: string;
  quesation: string;
  description: string;
  categoryId: number;
  creationDate: string;
  createBy: number;
  isActive: boolean;
  lastUpdateDate: string;
  lastUpdateBy: number;
}
