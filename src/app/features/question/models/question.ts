export interface IQuestion {
  id: number | string;
  quesation1: string;
  quesation: string;
  description: string;
  categoryId: number;
  category: string;
  creationDate: string;
  createBy: number;
  isActive: boolean;
  lastUpdateDate: string;
  lastUpdateBy: number;
}
