// Dependencies
import { AxiosResponse } from 'axios';

const responseInterceptor = () => (response: AxiosResponse): unknown =>
  response.data;

export default responseInterceptor;
