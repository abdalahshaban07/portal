export interface IQuestion {
  id: number | string;
  projectId?: number | string;
  quesation: string;
  description: string;
  categoryId: number;
  category: string;
  status: string;
  creationDate: string;
  createBy: number;
  isActive: boolean;
  lastUpdateDate: string;
  lastUpdateBy: number;
  clientLastUpdateDate?: string;
  consultantLastUpdateDate?: string;
}
