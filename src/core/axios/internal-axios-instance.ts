// Dependencies
import axios, { AxiosInstance } from 'axios';

// Config
import config from '@mobiera/config';

// Interceptors
import responseInterceptor from '@mobiera/core/axios/interceptors/reponse';

const DEFAULT_TIMEOUT = config.defaultTimeout;

export class InternalAxiosInstance {
  private readonly http: AxiosInstance;

  constructor(configuration = {}) {
    this.http = axios.create(configuration);
  }

  instance(): AxiosInstance {
    this.http.interceptors.response.use(responseInterceptor());
    return this.http;
  }
}

export const internalAxiosInstance: AxiosInstance = new InternalAxiosInstance({
  timeout: DEFAULT_TIMEOUT,
  headers: { 'content-type': 'application/json' },
}).instance();
