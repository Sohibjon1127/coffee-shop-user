export interface ISuccess {
  statusCode: number;
  message: string;
  data: object;
}

export interface IFindOptions<T, W = any> {
  where?: W;
  select?: Partial<Record<keyof T, boolean>>;
  include?: Record<string, boolean>;
  relations?: Record<string, boolean>;
  orderBy?: any;
  page?: number;
  pageSize?: number;
}
