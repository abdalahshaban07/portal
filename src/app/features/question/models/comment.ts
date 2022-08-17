export interface IComment {
  id: number;
  answer: string;
  answerDocs: IAnswerDocs[];
  projectId: number;
  projectLineId: number;
  quesationId: number;
  clientUserCreateBy: string;
  consultentCreateBy: string;
}

export interface IAnswerDocs {
  id: number;
  projectId: number;
  answer: string;
  clientUserCreateBy: string;
  consultentCreateBy: string;
  documentName: string[];
  imagePath: string[];
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
