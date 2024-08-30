import { RPCErrorInfo } from '@core/interfaces';

export class RPCError extends Error {
  public code: number;
  public details?: Record<string, string>;
  constructor(error: RPCErrorInfo) {
    super(error.message);
    this.code = error.code;
    this.details = error.data;
  }
}
