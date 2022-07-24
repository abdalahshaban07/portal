export interface ApiListResponse<T> extends ResponseModel<T> {
  data: {
    pageIndex: number;
    pageCount: number;
    totalCount: number;
    dataList: T[];
  };
}

export interface ResponseModel<T> {
  isSuccess: boolean;
  successMessage: string;
  data: string | object | T;
  errorMessage: string;
  statusCode: number;
  errorCode: number;
}
