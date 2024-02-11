/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Reservation } from '../../models/reservation';

export interface ApiReservationsGet$Plain$Params {
}

export function apiReservationsGet$Plain(http: HttpClient, rootUrl: string, params?: ApiReservationsGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Reservation>>> {
  const rb = new RequestBuilder(rootUrl, apiReservationsGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Reservation>>;
    })
  );
}

apiReservationsGet$Plain.PATH = '/api/Reservations';
