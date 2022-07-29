export interface ApiListResponse<T> extends ResponseModel {
  data: {
    pageIndex: number;
    pageCount: number;
    totalCount: number;
    dataList: T[];
  };
}

export interface ResponseModel {
  isSuccess: boolean;
  successMessage: string;
  data: string | object;
  errorMessage: string;
  statusCode: number;
  errorCode: number;
}
