/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ReservationDto } from '../../models/reservation-dto';

export interface ApiReservationsPost$Json$Params {
      body?: ReservationDto
}

export function apiReservationsPost$Json(http: HttpClient, rootUrl: string, params?: ApiReservationsPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ReservationDto>> {
  const rb = new RequestBuilder(rootUrl, apiReservationsPost$Json.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
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

apiReservationsPost$Json.PATH = '/api/Reservations';
