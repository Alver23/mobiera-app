interface IEndpoints {
  [key: string]: string;
}

export interface IConfig {
  environment: string;
  defaultTimeout: number;
  endpoints: IEndpoints;
}
