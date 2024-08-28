export type Method = 'get' | 'post' | 'put' | 'delete';

export interface RPCResponse<T> {
  result?: T;
  error?: {
    code: number;
    message: string;
  };
}
