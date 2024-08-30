export type HttpMethod = 'get' | 'post' | 'put' | 'delete';

export interface RPCResponse<T> {
  result?: T;
  error?: RPCErrorInfo;
}

export interface RPCErrorInfo {
  code: number;
  message: string;
  data?: Record<string, string>;
}
