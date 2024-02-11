/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ReservationDto } from '../../models/reservation-dto';

export interface ApiReservationsIdGet$Json$Params {
  id: number;
}

export function apiReservationsIdGet$Json(http: HttpClient, rootUrl: string, params: ApiReservationsIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ReservationDto>> {
  const rb = new RequestBuilder(rootUrl, apiReservationsIdGet$Json.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ReservationDto>;
    })
  );
}

apiReservationsIdGet$Json.PATH = '/api/Reservations/{id}';
