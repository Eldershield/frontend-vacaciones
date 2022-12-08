/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Cargos } from '../models/cargos';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoCargosControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation empleadoCargosControllerGetCargos
   */
  static readonly EmpleadoCargosControllerGetCargosPath = '/empleados/{id}/cargos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCargos()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCargos$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Cargos>>> {

    const rb = new RequestBuilder(this.rootUrl, EmpleadoCargosControllerService.EmpleadoCargosControllerGetCargosPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Cargos>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCargos$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCargos(params: {
    id: string;
    context?: HttpContext
  }
): Observable<Array<Cargos>> {

    return this.getCargos$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Cargos>>) => r.body as Array<Cargos>)
    );
  }

}
