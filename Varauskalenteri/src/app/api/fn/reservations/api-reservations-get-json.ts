/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Reservation } from '../../models/reservation';

export interface ApiReservationsGet$Json$Params {
}

export function apiReservationsGet$Json(http: HttpClient, rootUrl: string, params?: ApiReservationsGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Reservation>>> {
  const rb = new RequestBuilder(rootUrl, apiReservationsGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Reservation>>;
    })
  );
}

apiReservationsGet$Json.PATH = '/api/Reservations';