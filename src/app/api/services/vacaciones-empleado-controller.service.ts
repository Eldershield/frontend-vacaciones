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

import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root',
})
export class VacacionesEmpleadoControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation vacacionesEmpleadoControllerGetEmpleado
   */
  static readonly VacacionesEmpleadoControllerGetEmpleadoPath = '/vacaciones/{id}/empleado';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getEmpleado()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEmpleado$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Empleado>>> {

    const rb = new RequestBuilder(this.rootUrl, VacacionesEmpleadoControllerService.VacacionesEmpleadoControllerGetEmpleadoPath, 'get');
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
        return r as StrictHttpResponse<Array<Empleado>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getEmpleado$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEmpleado(params: {
    id: string;
    context?: HttpContext
  }
): Observable<Array<Empleado>> {

    return this.getEmpleado$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Empleado>>) => r.body as Array<Empleado>)
    );
  }

}
