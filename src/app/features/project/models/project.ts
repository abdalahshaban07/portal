export interface IProject {
  id: number;
  clientId: number;
  certificateId: number;
  status: number;
  startDate: string;
  endDate: string;
  description: string;
  projectCode: string;
  consultantLastActionBy: string;
  certificate: string;
  client: string;
  quesStatus: string;
}
