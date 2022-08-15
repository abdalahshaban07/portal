export interface IComment {
  id: number;
  projectId: number;
  projectLineId: number;
  quesationId: number;
  answer: string;
  answerDocs: IAnswerDocs[];
}

export interface IAnswerDocs {
  id: number;
  clientId: number;
  projectQuesAnswerId: number;
  projectLineId: number;
  quesationId: number;
  documentName: string;
  imagePath: string;
  description: string;
  uploadDate: string;
  answer: string;
}

export interface IAnswerTable {
  data: {
    dataList: IAnswerDocs[];
    totalCount: number;
  };
}

export enum CategoryTitle {
  documents = 'List Of Documents',
  records = 'List Of Records',
  solutions = 'List Of Solutions',
  configuration = 'Configuration Requirements',
}
