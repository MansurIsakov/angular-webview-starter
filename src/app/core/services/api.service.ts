import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { environment } from '@environments/environments';
import { Observable, map } from 'rxjs';

import { type HttpMethod, RPCResponse } from '@core/interfaces';
import { RPCError } from '@core/models';

import { UniqueIdService } from './unique-id.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _httpService = inject(HttpClient);
  private _uniqueIdService = inject(UniqueIdService);

  private readonly _apiEndpoint = environment.apiEndpoint;

  public get<Response>(url: string): Observable<Response> {
    return this.makeRequest<Response, null>('get', url);
  }

  public post<Response, Body>(url: string, body?: Body): Observable<Response> {
    const requestBody = {
      id: this._uniqueIdService.getUniqueId(),
      jsonrpc: '2.0',
      method: url,
      params: body ?? {},
    };
    return this.makeRequest<RPCResponse<Response>, typeof requestBody>(
      'post',
      url,
      { body: requestBody }
    ).pipe(
      map(response => {
        if (response.error) {
          throw new RPCError(response.error);
        }

        return response.result as Response;
      })
    );
  }

  private makeRequest<TResponse, TBody>(
    method: HttpMethod,
    url: string,
    options?: {
      body?: TBody;
      headers?: HttpHeaders | { [header: string]: string | string[] };
      params?: HttpParams | { [param: string]: string | string[] };
    }
  ): Observable<TResponse> {
    const apiUrl = `${this._apiEndpoint}/${url}`;
    return this._httpService.request<TResponse>(method, apiUrl, options);
  }
}
